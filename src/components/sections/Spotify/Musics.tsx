import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Musics = ({ data, setMusic }: any) => {
  console.log();

  return (
    <div className=" grid grid-cols-1 px-20">
      {data.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">Search for a song</h1>
        </div>
      ) : (
        <></>
      )}
      {data?.map((item: any) => (
        <>
          <div key={item.id}>
            <Card className="flex justify-between">
              <div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>
                    <span className="font-bold">Artist: </span>
                    {item.artists?.map((artist: any) => artist.name).join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    onClick={() => {
                      setMusic(item.id);
                    }}
                  >
                    Play
                  </Button>
                </CardFooter>
              </div>
              <div>
                <img src={item.album.images[0].url} width={200} />
              </div>
            </Card>
          </div>
        </>
      ))}
    </div>
  );
};

export default Musics;
