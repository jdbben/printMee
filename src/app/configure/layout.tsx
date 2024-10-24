"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Progressbar from "@/components/Progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <MaxWidthWrapper>
      <Progressbar />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MaxWidthWrapper>
  );
};

export default layout;
