import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import MenuBar from "@/components/MenuBar";
import Cards from "@/components/Cards";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/");
  }

  return (
    <>
      <MenuBar />
      <Cards />
    </>
  );
};

export default page;