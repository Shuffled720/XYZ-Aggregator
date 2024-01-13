"use client"

import { useEffect, useState } from "react"
import { CardWithForm } from "./NewsCard"
// import { apiURL } from "@/lib/urls";
import { Skeleton } from "@/components/ui/skeleton"
import { useGlobalContext } from "@/context/store"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const apiURL = process.env.NEXT_PUBLIC_API_URL

const News = () => {
  const { search, setSearch } = useGlobalContext()

  const [totalResults, setTotalResults] = useState(-1)
  const [data, setData] = useState([])
  const callAPI = async () => {
    try {
      const res = await fetch(`${apiURL}/newsapi/?key=${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      setTotalResults(data.response.totalResults)
      setData(data.response.articles)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    callAPI()
    setSearch("")
  }, [])
  return (
    <>
      <div className="mx-auto ">
        <h1 className="text-5xl text-center py-10">News</h1>
        <div className="w-1/2 m-auto py-2 flex justify-between">
          <Input
            className="mx-1"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
            type="text"
            placeholder="Search..."
          />
          <Button
            onClick={() => {
              callAPI()
              setTotalResults(-1)
              setData([])
            }}
          >
            Submit
          </Button>
        </div>

        {search === "" ? (
          <>
            <h1 className="text-2xl text-center m-auto">Search for news...</h1>
          </>
        ) : (
          <></>
        )}
        {data && data.length === 0 && totalResults === -1 ? (
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
            <div className="m-4 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 justify-items-center ">
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
  )
}

export default News
