"use client";

import { useEffect, useState } from "react";
import { CardWithForm } from "./NewsCard";
import { apiURL } from "@/lib/urls";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import { useGlobalContext } from "@/context/store";

const News = () => {
  const { search, apiType } = useGlobalContext();
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
      setData(data.response.articles);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      callAPI();
    }, 1500);
  }, [search, apiType]);
  return (
    <>
      <div className="mx-auto ">
        {data && data.length === 0 ? (
          <>
            <div className=" h-screen ">
              {/* <div className="mx-auto">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
            <h3 className="font-semibold text-xl">Loading...</h3>
          </div> */}
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <div className="flex py-5 items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="m-4 grid md:grid-cols-3 gap-2 sm:grid-cols-1 justify-items-center ">
              {data?.map((item: any) => (
                <>
                  {/* <div>{item?.title}</div> */}
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
