import { Schema, model } from "mongoose";

const tecnologiaSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
});

export const Tecnologia = model("Tecnologia", tecnologiaSchema);
