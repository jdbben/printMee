import prisma from "./prismaClient";

export const fetchDataFromDatabase = async (name: string) => {
  try {
    const userWithPreviews = await prisma.user.findUnique({
      where: {
        name: name,
      },
      include: {
        Preview: true,
      },
    });
    if (!userWithPreviews) {
      throw new Error("User not found");
    }

    return userWithPreviews.Preview;
  } catch (err) {
    console.log("cant get your user infos ", err);
    throw new Error("cant get data for preview");
  }
};
