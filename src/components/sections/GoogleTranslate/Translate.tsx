"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGlobalContext } from "@/context/store";
// import { apiURL } from "@/lib/urls";
import { useState } from "react";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const Translate = () => {
  const { search, setSearch } = useGlobalContext();
  const [data, setData] = useState([]);

  const handleClick = async () => {
    try {
      const res = await fetch(`${apiURL}/translate/?key=${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setData(data.response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-5xl text-center py-10">Translate</h1>
      <div className="w-1/2 m-auto py-2 flex justify-between">
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
            handleClick();
          }}
        >
          Submit
        </Button>
      </div>
      {data.length === 0 ? <>Type Somthing to translate</> : <></>}
      <div>
        <h1 className="text-5xl text-center py-10">{data}</h1>
      </div>
    </>
  );
};

export default Translate;
