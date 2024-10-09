import { options } from "@/app/api/auth/[...nextauth]/options";
import PreviewUserIn from "@/components/PreviewUserIn";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
interface Sess extends Session {
  user?:
    | {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
    | undefined;
}
const page = () => {
  const func = async () => {
    const session: Sess | null = await getServerSession(options);

    return (
      <div>
        <PreviewUserIn name={session?.user?.name} />
      </div>
    );
  };
  return <div>{func()}</div>;
};

export default page;
