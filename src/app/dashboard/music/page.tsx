import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  // const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
  const redirectUri =
    "https://xyz-aggregator-vishal.vercel.app/api/callback/spotify";
  const state = generateRandomString(16);
  var scope = "streaming \
  user-read-email \
  user-read-private".toString();

  const queryString = `response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
  redirect(`https://accounts.spotify.com/authorize?${queryString}`);
  return <></>;
};

export default Page;

function generateRandomString(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
