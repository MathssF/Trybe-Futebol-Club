import { TeamsBoardInt, LeaderBoardInt } from '../interfaces/LeaderBoardInt';

export default class LeaderBoardOpe {
  static ifWin(acc: number, pro: number, contra: number) {
    let total = acc;
    if (pro > contra) total += 1;
    return total;
  }

  static ifLose(acc: number, pro: number, contra: number) {
    let total = acc;
    if (pro < contra) total += 1;
    return total;
  }

  static ifDraw(acc: number, pro: number, contra: number) {
    let total = acc;
    if (pro === contra) total += 1;
    return total;
  }

  static async filterId(arrayBoard: TeamsBoardInt[]) {
    arrayBoard.forEach((elem) => {
      // eslint-disable-next-line no-param-reassign
      delete (elem.id);
    });
    return arrayBoard as LeaderBoardInt[];
  }

  // eslint-disable-next-line max-lines-per-function
  static async orderRank(arrayBoard: LeaderBoardInt[]) {
    // eslint-disable-next-line array-callback-return, sonarjs/cognitive-complexity
    arrayBoard.sort((b, a) => {
      if (a.totalPoints < b.totalPoints) return -1;
      if (a.totalPoints > b.totalPoints) return 1;
      if (a.totalPoints === b.totalPoints) {
        if (a.totalVictories < b.totalVictories) return -1;
        if (a.totalVictories > b.totalVictories) return 1;
        if (a.totalVictories === b.totalVictories) {
          if (a.goalsBalance < b.goalsBalance) return -1;
          if (a.goalsBalance > b.goalsBalance) return 1;
          if (a.goalsBalance === b.goalsBalance) {
            if (a.goalsFavor < b.goalsFavor) return -1;
            if (a.goalsFavor > b.goalsFavor) return 1;
            return 0;
          }
          return 0;
        }
        return 0;
      }
      return 0;
    });
    return arrayBoard as LeaderBoardInt[];
  }
}
