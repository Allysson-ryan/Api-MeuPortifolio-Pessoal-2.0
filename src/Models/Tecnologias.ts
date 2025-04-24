import { Schema, model } from "mongoose";

const tecnologiaSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export const Tecnologia = model("Tecnologia", tecnologiaSchema);
