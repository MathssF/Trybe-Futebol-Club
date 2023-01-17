import { Response, Request } from 'express';
import LeaderBoardOpe from '../helpers/LeaderBoardOpe';
import LeaderBoardSer from '../services/LeaderBoardSer';

export default class LeaderBoardCon {
  static async getBoard(req: Request, res: Response) {
    const list = await LeaderBoardSer.getMatchesBoard();
    const result = await LeaderBoardOpe.filterId(list);
    const ranking = await LeaderBoardOpe.orderRank(result);
    return res.status(200).json(ranking);
  }

  static async getHomeBoard(req: Request, res: Response) {
    const list = await LeaderBoardSer.getHomeBoard();
    const result = await LeaderBoardOpe.filterId(list);
    const ranking = await LeaderBoardOpe.orderRank(result);
    return res.status(200).json(ranking);
  }

  static async getAwayBoard(req: Request, res: Response) {
    const list = await LeaderBoardSer.getAwayBoard();
    const result = await LeaderBoardOpe.filterId(list);
    const ranking = await LeaderBoardOpe.orderRank(result);
    return res.status(200).json(ranking);
  }
}
