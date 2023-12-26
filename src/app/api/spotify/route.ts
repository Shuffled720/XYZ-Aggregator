import { log } from "console";

const fetchAlbums = async (access_token: string, querry: string) => {
  var ArtistID = await fetch(
    // "https://api.spotify.com/v1/artists?q=" + querry + "&type=artist",
    "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + access_token,
      },
    }
  );
  const data = await ArtistID.json();
  //   return data.artists.items[0].id;
  console.log(data);
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("access_token");

  const querry = searchParams.get("q");
  // var keywithoutspace=key?.replace(/\s/g, '+');
  //   console.log(key, querry);
  const ArtistID = fetchAlbums(key ? key : "", querry ? querry : "");
  //   console.log(ArtistID);

  return Response.json({ ArtistID });
}
