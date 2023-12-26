import { redirect } from "next/navigation";

const fetchAut = async (code: string, state: string) => {
  const { NEXT_PUBLIC_SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
  const authOption = {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: "http://localhost:3000/dashboard/music",
      grant_type: "authorization_code",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer(
          NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
    json: true,
  };
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
  console.log(data);
  return data;
  //   Response.json({ json });
  //   return response;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  //   console.log(code);
  //   console.log(state);
  const response = await fetchAut(code ? code : "", state ? state : "");
  //   console.log(respo    nse);

  //   Response.redirect("http://localhost:3000/dashboard/music");
  redirect(`http://localhost:3000/dashboard/music/${response.access_token}`);
  return Response.json({ response });
}
