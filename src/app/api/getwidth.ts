import axios from "axios";
import sizeOf from "image-size";

export const fort = async (url: string) => {
  async function getImageDimensions(
    url: string
  ): Promise<{ width: number | undefined; height: number | undefined }> {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });
      const buffer = Buffer.from(response.data);

      const dimensions = sizeOf(buffer);

      return { width: dimensions.width, height: dimensions.height };
    } catch (error) {
      throw new Error(`Failed to load image from URL: ${url}. Error: ${error}`);
    }
  }
  const dimensions = await getImageDimensions(url)
    .then((dimensions) => {
      return {
        width: dimensions.width,
        height: dimensions.height,
      };
    })
    .catch((error) => {
      console.error(error);
    });
  return dimensions;
};
