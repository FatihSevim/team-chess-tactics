import { Request, Response, NextFunction } from "express";
import Champion from "../models/champion";

export const getAllChampions = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const champions = await Champion.find();
		res.status(200).json({ champions });
	} catch (error: any) {
		res.status(500).send(error.message);
	}
};

export const getRandomChampions = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const champions = await Champion.find()
			.skip(Math.floor(Math.random() * 5))
			.limit(5);
		res.status(200).json({ champions });
	} catch (error: any) {
		res.status(500).send(error.message);
	}
};

export const createChampion = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name, gold, health, damage } = req.body;
		const newChampion = new Champion({ name, gold, health, damage });
		await newChampion.save();
		res.status(201).json({ champion: newChampion });
	} catch (error: any) {
		res.status(500).send(error.message);
	}
};

export const deleteChampion = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deletedChampion = await Champion.findByIdAndDelete(id);
		if (!deletedChampion) {
			return res.status(404).json({ message: "Champion not found" });
		}
		res.status(200).json({ message: "Champion deleted successfully" });
	} catch (error: any) {
		res.status(500).send(error.message);
	}
};
