"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
// import { apiURL } from "@/lib/urls";
import Countries from "./Countries";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const Country = () => {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    console.log(keyword);
  });
  const handleRadioChange = () => (e: any) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };
  const callAPI = async () => {
    const res = await fetch(
      `${apiURL}/country/?key=${keyword}&value=${search}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setData(data.response);
    setSearched(false);
  };

  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center py-10">Countries</h1>

        <div className="w-1/2 m-auto  flex justify-between py-4">
          <Input
            className="mx-1"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            type="text"
            placeholder="Search..."
          />
          <Button
            onClick={() => {
              callAPI();
            }}
          >
            Submit
          </Button>
        </div>
        <RadioGroup className="flex" defaultValue="">
          <div className="flex flex-col  items-center space-x-2">
            <RadioGroupItem
              value="name"
              onClick={handleRadioChange()}
              id="r1"
            />
            <Label htmlFor="r1">Name</Label>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <RadioGroupItem
              value="currency"
              onClick={handleRadioChange()}
              id="r2"
            />
            <Label htmlFor="r2">Currency</Label>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <RadioGroupItem
              value="country_code"
              onClick={handleRadioChange()}
              id="r3"
            />
            <Label htmlFor="r3">Country Code</Label>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <RadioGroupItem
              value="lang"
              onClick={handleRadioChange()}
              id="r3"
            />
            <Label htmlFor="r3">Language</Label>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <RadioGroupItem
              value="region"
              onClick={handleRadioChange()}
              id="r3"
            />
            <Label htmlFor="r3">Region</Label>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <RadioGroupItem
              value="subregions"
              onClick={() => {
                handleRadioChange();
                setSearched(true);
              }}
              id="r3"
            />
            <Label htmlFor="r3">Subregions</Label>
          </div>
        </RadioGroup>
      </div>
      {data.length === 0 && search == "" ? (
        <>
          <h1 className="text-5xl text-center py-10">
            Search for a country...
          </h1>
        </>
      ) : (
        <></>
      )}
      {searched && data.length === 0 && search != "" ? (
        <>
          <h1 className="text-5xl text-center py-10">No country found!!!</h1>
        </>
      ) : (
        <>{data.length != 0 ? <Countries data={data} /> : <></>}</>
      )}
    </div>
  );
};

export default Country;
