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
                <div className="flex items-center flex-col  ">
                  <p className="text-3xl font-bold pt-6">
                    <span className="text-sky-500">Print</span>mee
                  </p>
                  <p className="text-black text-3xl pt-5 pb-4">
                    Log in to continue
                  </p>
                  <Link className="text-bold text-xl" href={"/api/auth/signin"}>
                    Sign up
                  </Link>
                  <div className="w-[80%] h-fit pt-5 text-md text-lg">
                    <p>
                      Sign in or log in to continue for a personalized
                      experience! By signing in, you’ll be able to save your
                      settings and enjoy seamless access across devices.
                    </p>
                  </div>
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
