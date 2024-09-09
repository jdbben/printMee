import { redirect } from 'next/navigation'
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
const f = createUploadthing()

const auth = (req: Request) => ({ id: "fakeId" })
export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .middleware(async ({ req }) => {
            const user = auth(req);
            if (!user) throw new UploadThingError("Unauthorized")
            return { userId: user.id }
        })
        .onUploadComplete(async ({ metadata, file }) => {
            //on complete scss i should run some code here
            console.log("Upload complete for user:", metadata.userId)
            console.log("file url", file.url)
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;