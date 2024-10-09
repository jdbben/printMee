import { addPrewview } from "@/db/addnewPreview";
import { fetchDataFromDatabase } from "@/db/database";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    if (!name) {
      return NextResponse.json({ err: "Name is required " }, { status: 400 });
    }
    const result = await fetchDataFromDatabase(name);
    return NextResponse.json({ message: "Data retrieved", data: result });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to retrieve data" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await addPrewview(data);
    return NextResponse.json({ message: "Data received", data: result });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to add preview" },
      { status: 500 }
    );
  }
}
