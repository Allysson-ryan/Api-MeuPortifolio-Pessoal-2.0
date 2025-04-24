import mongoose from "mongoose";

const ProjetoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String,
    image: String,
    video: String,
    technologiesUsed: [String],
    favorit: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Projeto = mongoose.model("Projeto", ProjetoSchema);
