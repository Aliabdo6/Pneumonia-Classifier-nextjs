import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dataPath = path.join(
    process.cwd(),
    "data.json"
  );

  try {
    const jsonData = fs.readFileSync(
      dataPath,
      "utf-8"
    );
    const predictions = JSON.parse(jsonData);
    return NextResponse.json(predictions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read data" },
      { status: 500 }
    );
  }
}
