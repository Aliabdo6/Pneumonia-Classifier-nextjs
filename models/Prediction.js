import mongoose from "mongoose";

const PredictionSchema = new mongoose.Schema({
  prediction: String,
  timestamp: Date,
  user: String,
  userName: String,
});

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);
