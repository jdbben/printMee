import { options } from "@/app/api/auth/[...nextauth]/options";
import { fort } from "@/app/api/getwidth";
import { getuserImg } from "@/app/api/userInfos/root";
import { getServerSession, Session } from "next-auth";
import ResizeImg from "./ResizeImg";

const UserImage = () => {
  let img: string[];
  const func = async () => {
    const session: Session | null = await getServerSession(options);
    const userimg = await getuserImg(session);
    img = userimg?.userImgData ?? [];
    const dim = await fort(img[img.length - 1]);
    const dimensions = {
      width: dim?.width,
      heigth: dim?.height,
    };

    return (
      <div>
        <ResizeImg img={img[img.length - 1]} width={dimensions.width} />
      </div>
    );
  };

  return <div>{func()}</div>;
};

export default UserImage;
