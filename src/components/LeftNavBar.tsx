import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  GlobeIcon,
  LanguagesIcon,
  MusicIcon,
  NewspaperIcon,
} from "lucide-react";

const LeftNavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <nav className="bg-secondary h-screen">
        <div className="flex flex-col justify-between h-screen">
          <Link href="/dashboard">
            <Image src="/logo.png" width={100} height={100} alt="_logo" />
          </Link>
          <div className=" flex flex-col justify-between text-center items-center">
            <div className="bg-primary my-2 h-9 w-9 rounded-full text-center  ">
              <Link href="/dashboard/news">
                <NewspaperIcon className="m-auto mt-1" />
              </Link>
            </div>
            News
            <div className="bg-primary my-2 h-9 w-9 rounded-full  ">
              <Link href="/dashboard/music">
                <MusicIcon className="m-auto mt-1" />
              </Link>
            </div>
            Music
            <div className="bg-primary my-2 h-9 w-9 rounded-full  ">
              <Link href="/dashboard/translate">
                <LanguagesIcon className="m-auto mt-1" />
              </Link>
            </div>
            Translate
            <div className="bg-primary my-2 h-9 w-9 rounded-full ">
              <Link href="/dashboard/countries">
                <GlobeIcon className="m-auto mt-1" />
              </Link>
            </div>
            Country
          </div>
          {user ? (
            <>
              <Button variant="ghost" asChild className=" height-full ">
                <LogoutLink>Log out</LogoutLink>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild className=" mx-3">
                <LoginLink>Login In</LoginLink>
              </Button>
              <Button variant="ghost" asChild className=" mx-3">
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default LeftNavBar;
