import prisma from "@/db/prismaClient";
import { getServerSession, Session } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

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
