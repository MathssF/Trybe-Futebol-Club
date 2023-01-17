import { TeamsInt } from '../interfaces/TeamsInt'; // Name
import { TeamsBoardInt } from '../interfaces/LeaderBoardInt';
import TeamsMod from '../database/models/TeamsMod';
import MatchesSer from './MatchesSer';
import LeaderBoardOpe from '../helpers/LeaderBoardOpe';

export default class LeaderBoardSer {
  static async getBoard() {
    const teamsList: TeamsInt[] = await TeamsMod.findAll(); // Name
    const teamsBoardList: TeamsBoardInt[] = teamsList.map((elem) => (
      {
        id: elem.id,
        name: elem.teamName,
        totalPoints: 0,
        totalGames: 0,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsBalance: 0,
        efficiency: '00.00',
      }
    ));
    return teamsBoardList;
  }

  // eslint-disable-next-line max-lines-per-function
  static async getMatchesBoard() {
    const teamsBoardList: TeamsBoardInt[] = await this.getBoard();
    const matchesBoard = await MatchesSer.getMatches(); // : MatchesInt[]
    // eslint-disable-next-line max-lines-per-function
    teamsBoardList.forEach((elem) => {
      const matches = matchesBoard;
      // eslint-disable-next-line max-lines-per-function
      matches.forEach((item) => { // : MatchesInt
        if (elem.id === item.homeTeam && item.inProgress === false) {
          /* eslint-disable no-param-reassign */
          elem.totalGames += 1;
          elem.goalsFavor += item.homeTeamGoals;
          elem.goalsOwn += item.awayTeamGoals;
          elem.totalVictories = LeaderBoardOpe.ifWin(
            elem.totalVictories,
            item.homeTeamGoals,
            item.awayTeamGoals,
          );
          elem.totalLosses = LeaderBoardOpe.ifLose(
            elem.totalLosses,
            item.homeTeamGoals,
            item.awayTeamGoals,
          );
          elem.totalDraws = LeaderBoardOpe.ifDraw(
            elem.totalDraws,
            item.homeTeamGoals,
            item.awayTeamGoals,
          );
          /* eslint-disable no-param-reassign */
        }
      });
      // eslint-disable-next-line max-lines-per-function
      matches.forEach((item) => { // : MatchesInt
        if (elem.id === item.awayTeam && item.inProgress === false) {
          /* eslint-disable no-param-reassign */
          elem.totalGames += 1;
          elem.goalsFavor += item.awayTeamGoals;
          elem.goalsOwn += item.homeTeamGoals;
          elem.totalVictories = LeaderBoardOpe.ifWin(
            elem.totalVictories,
            item.awayTeamGoals,
            item.homeTeamGoals,
          );
          elem.totalLosses = LeaderBoardOpe.ifLose(
            elem.totalLosses,
            item.awayTeamGoals,
            item.homeTeamGoals,
          );
          elem.totalDraws = LeaderBoardOpe.ifDraw(
            elem.totalDraws,
            item.awayTeamGoals,
            item.homeTeamGoals,
          );
          /* eslint-disable no-param-reassign */
        }
      });
      elem.goalsBalance = elem.goalsFavor - elem.goalsOwn;
      // elem.totalGames = elem.totalVictories + elem.totalLoses + elem.totalDraws;
      const wins = elem.totalVictories * 3;
      const ties = elem.totalDraws;
      elem.totalPoints = wins + ties;
      const pointMax = elem.totalGames * 3;
      if (pointMax === elem.totalPoints) {
        elem.efficiency = '100.00';
      } else if (elem.totalPoints === 0) {
        elem.efficiency = '0.00';
      } else {
        const balance = elem.totalPoints / pointMax;
        const balanceMult = balance * 100;
        const balanceResult = balanceMult.toPrecision(4);
        const balanceString = `${balanceResult}`;
        elem.efficiency = balanceString;
      }
    });
    return teamsBoardList;
  }

  // eslint-disable-next-line max-lines-per-function
  static async getHomeBoard() {
    const teamsBoardList: TeamsBoardInt[] = await this.getBoard();
    const matchesBoard = await MatchesSer.getMatches(); // : MatchesInt[]
    // eslint-disable-next-line max-lines-per-function
    teamsBoardList.forEach((elem) => {
      const matches = matchesBoard;
      // eslint-disable-next-line max-lines-per-function, sonarjs/no-identical-functions
      matches.forEach((item) => { // : MatchesInt
        if (elem.id === item.homeTeam && item.inProgress === false) {
          /* eslint-disable no-param-reassign */
          elem.totalGames += 1;
          elem.goalsFavor += item.homeTeamGoals;
          elem.goalsOwn += item.awayTeamGoals;
          elem.totalVictories = LeaderBoardOpe.ifWin(
            elem.totalVictories,
            item.homeTeamGoals,
            item.awayTeamGoals,
          );
          elem.totalLosses = LeaderBoardOpe.ifLose(
            elem.totalLosses,
            item.homeTeamGoals,
            item.awayTeamGoals,
          );
          elem.totalDraws = LeaderBoardOpe.ifDraw(
            elem.totalDraws,
            item.homeTeamGoals,
            item.awayTeamGoals,
          );
          /* eslint-disable no-param-reassign */
        }
      });
      elem.goalsBalance = elem.goalsFavor - elem.goalsOwn;
      // elem.totalGames = elem.totalVictories + elem.totalLoses + elem.totalDraws;
      const wins = elem.totalVictories * 3;
      const ties = elem.totalDraws;
      elem.totalPoints = wins + ties;
      const pointMax = elem.totalGames * 3;
      if (pointMax === elem.totalPoints) {
        elem.efficiency = '100.00';
      } else if (elem.totalPoints === 0) {
        elem.efficiency = '0.00';
      } else {
        const balance = elem.totalPoints / pointMax;
        const balanceMult = balance * 100;
        const balanceResult = balanceMult.toPrecision(4);
        const balanceString = `${balanceResult}`;
        elem.efficiency = balanceString;
      }
    });
    return teamsBoardList;
  }

  // eslint-disable-next-line max-lines-per-function
  static async getAwayBoard() {
    const teamsBoardList: TeamsBoardInt[] = await this.getBoard();
    const matchesBoard = await MatchesSer.getMatches(); // : MatchesInt[]
    // eslint-disable-next-line max-lines-per-function
    teamsBoardList.forEach((elem) => {
      const matches = matchesBoard;
      // eslint-disable-next-line max-lines-per-function, sonarjs/no-identical-functions
      matches.forEach((item) => { // : MatchesInt
        if (elem.id === item.awayTeam && item.inProgress === false) {
          /* eslint-disable no-param-reassign */
          elem.totalGames += 1;
          elem.goalsFavor += item.awayTeamGoals;
          elem.goalsOwn += item.homeTeamGoals;
          elem.totalVictories = LeaderBoardOpe.ifWin(
            elem.totalVictories,
            item.awayTeamGoals,
            item.homeTeamGoals,
          );
          elem.totalLosses = LeaderBoardOpe.ifLose(
            elem.totalLosses,
            item.awayTeamGoals,
            item.homeTeamGoals,
          );
          elem.totalDraws = LeaderBoardOpe.ifDraw(
            elem.totalDraws,
            item.awayTeamGoals,
            item.homeTeamGoals,
          );
          /* eslint-disable no-param-reassign */
        }
      });
      elem.goalsBalance = elem.goalsFavor - elem.goalsOwn;
      // elem.totalGames = elem.totalVictories + elem.totalLoses + elem.totalDraws;
      const wins = elem.totalVictories * 3;
      const ties = elem.totalDraws;
      elem.totalPoints = wins + ties;
      const pointMax = elem.totalGames * 3;
      if (pointMax === elem.totalPoints) {
        elem.efficiency = '100.00';
      } else if (elem.totalPoints === 0) {
        elem.efficiency = '0.00';
      } else {
        const balance = elem.totalPoints / pointMax;
        const balanceMult = balance * 100;
        const balanceResult = balanceMult.toPrecision(4);
        const balanceString = `${balanceResult}`;
        elem.efficiency = balanceString;
      }
    });
    return teamsBoardList;
  }
}
