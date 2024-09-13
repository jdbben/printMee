import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { PicUrlProvider } from "@/components/PictururlContext";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <MaxWidthWrapper>
      <PicUrlProvider>{children}</PicUrlProvider>
    </MaxWidthWrapper>
  );
};

export default layout;
