// import { appURL } from "@/lib/urls";
import { redirect } from "next/navigation";
const appURL = process.env.NEXT_PUBLIC_APP_URL;
const fetchAut = async (code: string, state: string) => {
  const { NEXT_PUBLIC_SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: `code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&grant_type=authorization_code`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer(
          NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
  });
  const data = await response.json();
  return data;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const response = await fetchAut(code ? code : "", state ? state : "");
  redirect(`${appURL}/dashboard/music/${response.access_token}`);
}
