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
  const { search, setSearch } = useGlobalContext();
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
      <div className=" container  py-2 ">
        <h1 className="text-5xl text-center py-10">Spotify</h1>

        <div className="grid md:grid-cols-2 xs:grid-cols-1 justify-between items-end">
          <SpotifyUser accessToken={params.access_token} />
          <div className="">
            <h1 className="text-xl font-bold text-center">Now Playing</h1>
            <div className="py-4">
              <SpotifyPlayer
                token={params.access_token}
                uris={[`spotify:track:${music}`]}
              />
            </div>
          </div>
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
        {data ? <Musics data={data} setMusic={setMusic} /> : ""}
      </div>
    </>
  );
};

export default Page;
