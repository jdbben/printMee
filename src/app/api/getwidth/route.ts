import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import sizeOf from "image-size";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Missing or invalid url parameter" }, { status: 400 });
  }

  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });

    const uint8Array = new Uint8Array(response.data);

    const dimensions = sizeOf(uint8Array);

    return NextResponse.json({ width: dimensions.width, height: dimensions.height });
  } catch (error) {
    console.error("Error getting image dimensions:", error);
    return NextResponse.json({ error: "Failed to get image dimensions" }, { status: 500 });
  }
}
