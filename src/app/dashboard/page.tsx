import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/");
  }
  return <>DashBoard</>;
};

export default page;
