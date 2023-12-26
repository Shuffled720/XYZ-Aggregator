const fetchAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body:
      "grant_type=client_credentials&client_id=" +
      process.env.SPOTIFY_CLIENT_ID +
      "&client_secret=" +
      process.env.SPOTIFY_CLIENT_SECRET,
  });
  const data = await response.json();
  //   console.log(data);
  return data;
};

export async function GET(req: Request) {
  // fetchAccessToken();
  const data = await fetchAccessToken();
  return Response.json(data);
}
