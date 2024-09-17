import { addNewpic } from "@/db/find";
import { getServerSession, Session } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { v4 as uuidv4 } from "uuid";
import { options } from "../auth/[...nextauth]/options";
const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const session: Session | null = await getServerSession(options);
      const user = session?.user;
      const id: string = uuidv4();
      return {
        uploadId: id,
        username: user?.name,
        useremail: user?.email,
        userimg: user?.image,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await addNewpic(metadata, file);
      //on complete scss i should run some code here

      console.log(
        "Upload complete for user:",
        metadata.uploadId,
        metadata.username
      );
      console.log("file url", file.url);
      return { uploadedBy: metadata.uploadId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
