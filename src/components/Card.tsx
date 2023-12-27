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

export function CardWithForm({ data }: any) {
  console.log(data);

  return (
    <Card className="w-[300px] ">
      <div className="">
        <div>
          <img
            className="w-100"
            src={data ? data.urlToImage : "placeholder.webp"}
            alt={data?.title}
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
            <Button>Open</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
