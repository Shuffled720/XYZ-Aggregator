import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <nav className=" px-2 flex justify-between  py-5 bg-foreground justify-items-center items-center">
        <div>
          <Link href="/dashboard">
            <Image src="/logo.png" width={100} height={100} alt="_logo" />
          </Link>
        </div>
        <div className=" flex justify-between ">
          {user ? (
            <>
              <Button asChild className=" height-full mx-3">
                <LogoutLink>Log out</LogoutLink>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className=" mx-3">
                <LoginLink>Login In</LoginLink>
              </Button>
              <Button asChild className=" mx-3">
                <RegisterLink>Sign up</RegisterLink>
              </Button>
            </>
          )}
          <ModeToggle />
        </div>
      </nav>
      <div className="bg-accent ">
        {user ? (
          <>
            <div className="bg-foreground h-full grid grid-cols-4 gap-4  justify-items-center	">
              <div>
                <Link href="/dashboard/news">
                  <Button className="p-6">News</Button>
                </Link>
              </div>
              <div>
                <Link href="/dashboard/music">
                  <Button className="p-6">Music</Button>
                </Link>
              </div>
              <div>
                <Link href="/dashboard/translate">
                  <Button className="p-6">Translate</Button>
                </Link>
              </div>
              <div>
                <Link href="/dashboard/countries">
                  <Button className="p-6">Country</Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
