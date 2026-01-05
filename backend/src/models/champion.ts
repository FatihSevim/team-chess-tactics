import { Schema, model, Document } from "mongoose";

export interface IChampion extends Document {
	name: string;
	gold: number;
	health: number;
	damage: number;
}

const championSchema = new Schema<IChampion>({
	name: { type: String, required: true },
	gold: { type: Number, required: true },
	health: { type: Number, required: true },
	damage: { type: Number, required: true },
});

export default model<IChampion>("Champion", championSchema);
