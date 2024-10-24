import prisma from "@/db/prismaClient";
import { Session } from "next-auth";

export const getuserImg = async (session: Session | null) => {
  let userImgData: string[] = [];
  if (session?.user && typeof session.user.name === "string") {
    try {
      const userInfos = await prisma.user.findUnique({
        where: {
          name: session.user.name,
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
