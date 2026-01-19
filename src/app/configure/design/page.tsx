import UserImage from "@/components/UserImage";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getuserImg } from "@/app/api/userInfos/root";
const Page = async () => {
    const session = await getServerSession(options);
      const userimg = await getuserImg(session);
        const imgs = userimg?.userImgData ?? [];
         const lastImg = imgs.length > 0 ? imgs[imgs.length - 1] : null;
      console.log("Fetched user images:", lastImg);

  return (
    <div>
       <UserImage session={session} lastImg={lastImg} />;
    </div>
  );
};

export default Page;
