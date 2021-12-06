import { Router } from "express";
const router = Router();

router.get("/api", (_, res) => {
    res.json({ message: "Hello World!" });
});


export default router;