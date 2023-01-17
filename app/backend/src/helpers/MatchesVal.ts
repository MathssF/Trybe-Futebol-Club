import MatchesMod from '../database/models/MatchesMod';
import { addMatchesInt } from '../interfaces/MatchesInt';
import { tokenVerify } from './jwt';

export default class MatchesVal {
  static async tokenValidade(token: string) {
    console.log('entrou na validação');
    const decoded = tokenVerify(token);
    console.log('saiu da validação');
    return decoded;
  }

  static async sameTeamValidade(homeTeam: number, awayTeam: number) {
    if (homeTeam === awayTeam) {
      return {
        status: 422,
        msg: 'It is not possible to create a match with two equal teams',
      };
    }
    return null;
  }

  static async inexisteTeam(Team: number) {
    const homeVali = await MatchesMod.findByPk(Team);
    if (!homeVali) {
      return {
        status: 404,
        msg: 'There is no team with such id!',
      };
    }
    return null;
  }

  static async allMatchesValidade(body: addMatchesInt) {
    const { homeTeam, awayTeam } = body;
    const sameTeam = await this.sameTeamValidade(homeTeam, awayTeam);
    if (sameTeam) return sameTeam;
    const inexistA = await this.inexisteTeam(homeTeam);
    if (inexistA) return inexistA;
    const inexistB = await this.inexisteTeam(awayTeam);
    if (inexistB) return inexistB;
    return null;
  }
}
