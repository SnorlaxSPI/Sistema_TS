import { Router } from 'express';
import { app } from "./app";

const router = Router();

router.get('/', (requst, response) => {
  return response.json({ message: 'JSON started' });
})

export { router };