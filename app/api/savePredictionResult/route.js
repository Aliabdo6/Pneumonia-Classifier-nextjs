import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Prediction from "../../../models/Prediction";

export async function POST(request) {
  await dbConnect();

  const body = await request.json();
  const {
    prediction,
    timestamp,
    user,
    userName,
  } = body;

  try {
    const newPrediction = new Prediction({
      prediction,
      timestamp,
      user,
      userName,
    });

    await newPrediction.save();

    return NextResponse.json({
      message:
        "Prediction result saved successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to save prediction result",
      },
      { status: 500 }
    );
  }
}
