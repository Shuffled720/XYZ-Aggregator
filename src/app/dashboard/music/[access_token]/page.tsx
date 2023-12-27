"use client";
import { SpotifyUser } from "@/components/sections/Spotify/SpotifyUser";
import { Input } from "@/components/ui/input";
import React, { FC, useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useGlobalContext } from "@/context/store";
import Musics from "@/components/sections/Spotify/Musics";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: { access_token: string };
}
const Page: FC<PageProps> = ({ params }) => {
  const { search, apiType, setSearch } = useGlobalContext();
  const [data, setData] = useState([]);
  const [music, setMusic] = useState<string>("0t488LlnuTDRjklgkotom9");
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=track&market=IN`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + params.access_token,
          },
        }
      );
      const data = await res.json();
      console.log(data.tracks.items);
      setData(data.tracks.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      callAPI();
    }, 1500);
  }, []);

  return (
    <>
      <div className=" container grid md:grid-cols-2 justify-center items-end ">
        <SpotifyUser accessToken={params.access_token} />
        <div className="">
          <div className="py-4">
            <SpotifyPlayer
              token={params.access_token}
              uris={[`spotify:track:${music}`]}
            />
          </div>
          <h1 className="text-xl font-bold text-center">Search for a song</h1>
          <div className=" m-auto py-2 flex justify-between">
            <Input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <Button onClick={() => callAPI()}>Submit</Button>
          </div>
        </div>
      </div>
      {data ? <Musics data={data} setMusic={setMusic} /> : ""}
      {/* <Musics data={data ? data : ""} /> */}
      {/* <WebPlayback token={params.access_token} /> */}
    </>
  );
};

export default Page;
