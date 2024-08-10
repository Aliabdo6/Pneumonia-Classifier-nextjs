import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Prediction from "../../../models/Prediction";

export async function GET() {
  await dbConnect();

  try {
    const predictions = await Prediction.find({})
      .sort({ timestamp: -1 })
      .lean();
    return NextResponse.json(predictions);
  } catch (error) {
    console.error(
      "Error fetching predictions:",
      error
    );
    return NextResponse.json(
      {
        error:
          "Failed to fetch prediction results",
      },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import dbConnect from "../../../lib/mongodb";
// import Prediction from "../../../models/Prediction";

// export async function GET() {
//   await dbConnect();

//   try {
//     const predictions = await Prediction.find(
//       {}
//     ).sort({ timestamp: -1 });
//     return NextResponse.json(predictions);
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error:
//           "Failed to fetch prediction results",
//       },
//       { status: 500 }
//     );
//   }
// }
