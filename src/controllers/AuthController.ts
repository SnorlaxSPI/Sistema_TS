import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models/User';

class AuthController {
  async authenticate(request:Request, response:Response) {

    const repository = getRepository(User);
    const { email, password } = request.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return response.status(409).json({ message: 'Email not found!'});
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);

    if(!isValidPassword) {
      return response.status(409).json({ message: 'Password not found!'});
    }

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "365d" });

    delete user.password;

    return response.json({
      user,
      token,
    });
  }
}

export default new AuthController;