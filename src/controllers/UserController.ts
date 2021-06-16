import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User'

class UserController {
  async store (request:Request, response:Response) {
    const repository = getRepository(User);
    const { email, password } = request.body;

    const UserExists = await repository.findOne({ where: { email } });

    if (UserExists) {
      return response.status(409).json({ message: 'User already exists!'});
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return response.json(user);
  }
}

export default new UserController();