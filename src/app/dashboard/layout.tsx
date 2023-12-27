import LeftNavBar from "@/components/LeftNavBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    redirect("/");
  }
  return (
    <>
      <div className="flex">
        <LeftNavBar />
        {children}
      </div>
    </>
  );
}
