import { ClientUploadedFileData, UploadedFileData } from "uploadthing/types";
import prisma from "./prismaClient";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const addNewpic = async (
  metadata: {
    uploadId: string;
    username: string | null | undefined;
    useremail: string | null | undefined;
    userimg: string | null | undefined;
  },
  file: UploadedFileData
) => {
  if (metadata && file) {
    try {
      await prisma.image.create({
        data: {
          uploadId: metadata.uploadId,
          url: file.url,
        },
      });
      console.log("img uploaded to db ");
    } catch (err) {
      console.log("fail to upload to db: ", err);
    }
  }
};

export const userCreate = async (token: JWT, session: Session) => {
  try {
    const target = token.sub;

    if (typeof target === "string") {
      const findeduser = await prisma.user.findUnique({
        where: { gitHubId: target },
      });

      if (findeduser === null || undefined) {
        if (typeof session.user?.name === "string") {
          const createuser = await prisma.user.create({
            data: {
              gitHubId: target,
              name: session.user?.name,
            },
          });
        }
      }
    }
  } catch (err) {
    console.log("err creating the user", err);
  }
};
