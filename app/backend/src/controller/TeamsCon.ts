import { Response, Request } from 'express';
import TeamsSer from '../services/TeamsSer';

export default class TeamsCon {
  static async teamsList(req: Request, res: Response) {
    const allTeams = await TeamsSer.teamsList();
    return res.status(200).json(allTeams);
  }

  static async teambyId(req: Request, res: Response) {
    const { id } = req.params;
    const findTeam = await TeamsSer.teamById(Number(id));
    return res.status(200).json(findTeam);
  }
}
