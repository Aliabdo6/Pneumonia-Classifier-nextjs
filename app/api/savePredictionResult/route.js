import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  // Assuming body contains prediction, timestamp, user, userName
  const {
    prediction,
    timestamp,
    user,
    userName,
  } = body;

  // Define the file path
  const filePath = path.join(
    process.cwd(),
    "data.json"
  );

  // Read existing data
  let data = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(
      filePath,
      "utf8"
    );
    data = JSON.parse(fileContent);
  }

  // Append new result including user information
  data.push({
    prediction,
    timestamp,
    user,
    userName,
  });

  // Write updated data to file
  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );

  // Return success response
  return NextResponse.json({
    message:
      "Prediction result saved successfully",
  });
}
