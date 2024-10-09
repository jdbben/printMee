import prisma from "./prismaClient";
export interface PreviewData {
  img: string;
  checked: string;
  color: string;
  position: number[];
  scale: number[];
  userName: string;
}

export const addPrewview = async (data: PreviewData) => {
  try {
    const user = await prisma.user.findUnique({
      where: { name: data.userName },
    });
    if (!user) {
      throw new Error("user does not exist");
    }
    await prisma.preview.create({
      data: {
        img: data.img,
        product: data.checked,
        position: [0.2, 0.6, 45],
        scale: data.scale,
        color: data.color,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    console.log("preview img done");
  } catch (err) {
    console.log("fail to upload the preview img", err);
    throw new Error("Database operation failed");
  }
};
