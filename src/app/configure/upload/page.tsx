import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession, Session } from "next-auth";
import Upload from "./upload";
import Link from "next/link";

const page = () => {
  let name: string | null | undefined;

  const func = async () => {
    const session: Session | null = await getServerSession(options);
    name = session?.user?.name;
    return name;
  };

  return (
    <div>
      {func().then((name) => {
        if (typeof name === "string") {
          return (
            <div>
              <Upload name={name} />
            </div>
          );
        } else {
          return (
            <div className="h-full w-full">
              <div className="fixed inset-0 bg-black opacity-50 z-30"></div>
              <div className="h-[40vh] w-[80vh] bg-white rounded-lg shadow-2xl z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                <div>
                  <p className="text-black text-xl">
                    You need to sign in or singup to be able to continue
                  </p>
                  <Link href={"/api/auth/signin"}>Sign up</Link>
                </div>
              </div>
              <Upload name={null} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default page;
