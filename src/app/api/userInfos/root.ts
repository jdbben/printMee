import prisma from "@/db/prismaClient";

export const getuserImg = async (name: string) => {
  let userImgData: string[] = [];
  if (typeof name === "string") {
    try {
      const userInfos = await prisma.user.findUnique({
        where: {
          name: name,
        },
        include: {
          PrevImgs: true,
        },
      });

      if (userInfos && userInfos.PrevImgs) {
        userImgData = userInfos.PrevImgs.map((img) => img.url);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    return { userImgData };
  }
};
