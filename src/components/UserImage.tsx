import { getuserImg } from "@/app/api/userInfos/root";

const UserImage = (name: string) => {
  const func = async () => {
    if (name) {
      const userimg = await getuserImg(name);
      const img = userimg?.userImgData ?? [];
      return <p>{img}</p>;
    }
  };
  func();
};

export default UserImage;
