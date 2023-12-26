"use client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import MenuBar from "@/components/MenuBar";
import Cards from "@/components/Cards";
import News from "@/components/sections/News/News";
import { Car } from "lucide-react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/");
  }
  return (
    <>
      <MenuBar />
      {/* <News /> */}
      {/* <Cards /> */}
    </>
  );
};

export default page;
