import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main>
      <>
        <div className="area home">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="relative h-screen  overflow-hidden">
            <div className="text-black container relative z-10 flex flex-col justify-center items-center h-full text-center">
              <Image src="/logo.png" width={450} height={450} alt="_logo" />
              <h1 className="text-5xl font-bold leading-tight mb-4">
                Welcome to our XYZ Aggregator
              </h1>
              <p className=" text-xl text-gray-300 mb-8">
                Discover amazing features and services that await you
              </p>
              {user && user.id ? (
                <>
                  <Button className="mx-2 p-5">
                    <LoginLink>Continue</LoginLink>
                  </Button>
                </>
              ) : (
                <div className="flex justify-between">
                  <Button className="mx-2 p-5">
                    <LoginLink>Login</LoginLink>
                  </Button>
                  <Button className="mx-2">
                    <RegisterLink>Register</RegisterLink>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
