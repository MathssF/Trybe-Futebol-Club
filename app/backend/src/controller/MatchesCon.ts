import { Response, Request } from 'express';
import { StatusInt } from '../interfaces/StatusInt';
import MatchesVal from '../helpers/MatchesVal';
import MatchesSer from '../services/MatchesSer';
import { editMatchesInt } from '../interfaces/MatchesInt';

export default class MatchesCon {
  static async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const progressMatches = await MatchesSer.getCurrentMatches(JSON.parse(inProgress as string));
      return res.status(200).json(progressMatches);
    }
    const allMatches = await MatchesSer.getMatches();
    return res.status(200).json(allMatches);
  }

  static async postMatches(req: Request, res: Response) {
    const { body } = req;
    const token = req.headers.authorization as string;
    const checkToken = await MatchesVal.tokenValidade(token);
    if (checkToken === 'error') {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    const validations: StatusInt | null = await MatchesVal.allMatchesValidade(body);
    if (validations) {
      const { status, msg } = validations;
      return res.status(status).json({ message: msg });
    }
    const record = await MatchesSer.postMatches(body);
    return res.status(201).json(record);
  }

  static async finishMatches(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesSer.finishMatches(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }

  static async updateMatches(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const ht = Number(homeTeamGoals);
    const at = Number(awayTeamGoals);
    const bodyData: editMatchesInt = { homeTeamGoals: ht, awayTeamGoals: at };
    const update = await MatchesSer.updateMatches(Number(id), bodyData);
    return res.status(200).json(update);
  }
}
