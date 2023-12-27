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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function CardWithForm({ data }: any) {
  return (
    <Card className="w-[300px] mt-3 ">
      <div className="">
        <div>
          <img
            className="w-100"
            src={data.urlToImage ? data.urlToImage : "/placeholder.webp"}
            alt={data?.title}
            loading="lazy"
          />
        </div>
        <div>
          <CardHeader>
            <CardTitle>{data?.title}</CardTitle>
          </CardHeader>
        </div>
        <div>
          <CardContent>
            <CardDescription>{data?.description}</CardDescription>
          </CardContent>
        </div>
        <div>
          <CardFooter className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[1000px]">
                <iframe
                  width="830"
                  height="800"
                  scrolling="yes"
                  seamless
                  className="w-full aspect-video"
                  src={data?.url}
                ></iframe>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
