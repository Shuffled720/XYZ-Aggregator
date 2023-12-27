import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/");
  }
  return (
    <>
      <div className="area">
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
        <div className="text-black relative h-full overflow-hidden">
          <div className=" container relative z-10 flex flex-col justify-center items-center h-full text-center">
            <Image src="/logo.png" width={450} height={450} alt="_logo" />
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to our XYZ Aggregator
            </h1>
            <p className=" text-xl text-gray-300 mb-8">
              Discover amazing features and services that await you
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
