import { Router } from "express";

const sampleRoutes = Router();

sampleRoutes.post("/sample", SampleController.handle)

export { sampleRoutes };
