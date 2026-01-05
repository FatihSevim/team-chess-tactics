import { Router } from "express";
import { createChampion, deleteChampion, getAllChampions, getRandomChampions } from "../controllers/championController";

const router: Router = Router();

router.route("/champions").get(getAllChampions).post(createChampion);
router.route("/champions/random").get(getRandomChampions);
router.route("/champions/:id").delete(deleteChampion);

export default router;
