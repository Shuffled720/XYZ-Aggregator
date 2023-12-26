"use client";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function SpotifyUser({ accessToken }: { accessToken: string }) {
  // return <>{accessToken}</>;
  const [user, setUser] = React.useState<any>();
  const countRef = React.useRef(0);
  React.useEffect(() => {
    if (!accessToken) return;
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
    countRef.current++;
  }, [countRef]);

  return (
    <Card className="w-[400px] mx-auto my-2">
      <CardHeader>
        <CardTitle>
          <h1 className="text-green-500">Spotify</h1>
        </CardTitle>
        <CardTitle>{user?.display_name}</CardTitle>
        <CardDescription>Country: {user?.country}</CardDescription>
        <CardDescription>
          Plan: <span className="text-orange-200">{user?.product}</span>
        </CardDescription>
        <CardDescription>Followers: {user?.followers?.total}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild>
          <Link
            href={
              user?.external_urls?.spotify ? user?.external_urls?.spotify : " "
            }
          >
            Open in app
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
