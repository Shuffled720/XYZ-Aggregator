import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log(user);

  return (
    <div>
      <nav className="flex justify-around  py-5 bg-foreground justify-items-center items-center">
        <div>
          <h1 className="text-background ">XYZ Aggregator</h1>
        </div>
        <div className=" flex justify-between ">
          {user ? (
            <>
              <Button asChild className=" mx-3">
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
      <div className="bg-accent p-4">
        <div className="grid grid-cols-4 gap-4  justify-items-center	">
          <div>
            <Button asChild>
              <Link href="/dashboard/news">News</Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link href="/dashboard/music">Music</Link>
            </Button>
          </div>
          <div>
            <Button>Reddit</Button>
          </div>
          <div>
            <Button>arcXiv</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
