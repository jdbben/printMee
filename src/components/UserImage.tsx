"use client";
import { useEffect, useState } from "react";
import ResizeImg from "./ResizeImg";
import type { Session } from "next-auth";

type Props = {
  session: Session | null;
  lastImg: string | null;
};

const UserImage: React.FC<Props> = ({ session, lastImg }) => {
  const [dimensions, setDimensions] = useState<{ width?: number; height?: number } | null>(null);

  useEffect(() => {

    if (!lastImg) return;

    async function fetchDimensions() {
      try {
        if(!lastImg){
          return console.error("last Image is undefind")
        }
        const res = await fetch(`/api/getwidth?url=${encodeURIComponent(lastImg)}`);
        if (!res.ok) throw new Error("Failed to get image dimensions");
        const data = await res.json();
        setDimensions({ width: data.width, height: data.height });
       
      } catch (err) {
        console.error(err);
      }
     
    }

    fetchDimensions();
  }, [lastImg]);

  if (!lastImg || !dimensions) return <div>Loading...</div>

  return <ResizeImg img={lastImg} dimensions={dimensions} userName={session?.user?.name} />
};

export default UserImage;
