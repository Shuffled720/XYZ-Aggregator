import { translate } from "@vitalets/google-translate-api";
const fetchTranslation = async (key: string) => {
  const { text } = await translate(key, { to: "en" });
  // console.log(text);
  return text;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const response = await fetchTranslation(key ? key : "");
  // console.log(response);
  return Response.json({ response });
}
