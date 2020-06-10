import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Nps from '../models/Nps';

class NpsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const npsRepository = getRepository(Nps);

    const user = await npsRepository.findOne(id);

    const userVoted = !!user;

    return response.json({ voted: userVoted });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id, email, note } = request.body;

    const npsRepository = getRepository(Nps);

    const userVoted = npsRepository.create({ id, email, note });

    await npsRepository.save(userVoted);

    return response.json(userVoted);
  }
}

export default new NpsController();
