"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface PicUrlContextType {
  picUrl: string;
  setPicUrl: (url: string) => void;
}

const PicUrlContext = createContext<PicUrlContextType | undefined>(undefined);

export const PicUrlProvider = ({ children }: { children: ReactNode }) => {
  const [picUrl, setPicUrl] = useState<string>("");

  return (
    <PicUrlContext.Provider value={{ picUrl, setPicUrl }}>
      {children}
    </PicUrlContext.Provider>
  );
};

export const usePicUrl = () => {
  const context = useContext(PicUrlContext);
  if (!context) {
    throw new Error("usePicUrl must be used within a PicUrlProvider");
  }
  return context;
};
