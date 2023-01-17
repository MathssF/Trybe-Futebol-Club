import { addMatchesInt, editMatchesInt } from '../interfaces/MatchesInt'; // , MatchesInt
import MatchesMod from '../database/models/MatchesMod';
import TeamsMod from '../database/models/TeamsMod';

export default class MatchesSer {
  static async getMatches(): Promise<MatchesMod[]> { // Int
    const list = await MatchesMod.findAll({
      include: [
        { model: TeamsMod, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamsMod, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return list;
  }

  static async getCurrentMatches(inProgress: boolean): Promise<MatchesMod[]> { // Int
    const list = await MatchesMod.findAll({
      where: { inProgress },
      include: [
        { model: TeamsMod, as: 'teamHome', attributes: ['teamName'] },
        { model: TeamsMod, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return list;
  }

  static async postMatches(reqData: addMatchesInt) {
    const record = await MatchesMod.create({
      ...reqData, inProgress: true,
    });
    return record;
  }

  static async finishMatches(id: number) {
    const finish = await MatchesMod.update(
      { inProgress: false },
      { where: { id } },
    );
    return finish;
  }

  static async updateMatches(id: number, reqData: editMatchesInt) {
    const update = await MatchesMod.update(
      { ...reqData },
      { where: { id } },
    );
    return update;
  }
}
