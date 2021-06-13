import { Router } from 'express';

const router = Router();

router.use('/', (request, response) => {
  return response.json({ message: 'JSON!!'});
})

export { router };