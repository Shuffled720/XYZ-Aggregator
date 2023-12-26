"use client";

import { useEffect, useState } from "react";
import { CardWithForm } from "./NewsCard";
import { apiURL } from "@/lib/urls";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalContext } from "@/context/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const News = () => {
  const { search, setSearch } = useGlobalContext();
  const [totalResults, setTotalResults] = useState(-1); // data["totalResults"
  const [data, setData] = useState([]);
  const callAPI = async () => {
    try {
      const res = await fetch(`${apiURL}/newsapi/?key=${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      //   console.log(data);
      setTotalResults(data.response.totalResults);
      setData(data.response.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      <div className="mx-auto ">
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
              callAPI();
              setTotalResults(-1);
              setData([]);
            }}
          >
            Submit
          </Button>
        </div>
        {data.length === 0 && totalResults === -1 ? (
          <>
            <div className="">
              <div className="py-5 flex items-center space-x-4 px-10 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 w-9/12">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-9/12" />
                </div>
              </div>
              <div className="py-5 flex items-center space-x-4 px-10 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 w-9/12">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-9/12" />
                </div>
              </div>
              <div className="py-5 flex items-center space-x-4 px-10 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 w-9/12">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-9/12" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {totalResults === 0 ? (
          <>
            <h1 className="text-destructive text-center text-3xl my-5">
              No news to display!!!
            </h1>
          </>
        ) : (
          <>
            <div className="m-4 grid md:grid-cols-5 gap-2 sm:grid-cols-1 justify-items-center ">
              {data?.map((item: any) => (
                <>
                  <CardWithForm data={item} />
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default News;
