import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";

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
    </div>
  );
};

export default Navbar;
