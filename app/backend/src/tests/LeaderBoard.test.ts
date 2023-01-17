  // import * as sinon from 'sinon';
  // import * as chai from 'chai';
  // // @ts-ignore
  // import chaiHttp = require('chai-http');

  // import App from '../app';
  // import Example from '../database/models/ExampleModel';

  // import { Response } from 'superagent';
  // import LeaderBoardOpe from '../helpers/LeaderBoardOpe';

  // chai.use(chaiHttp);

  // const { app } = new App();

  // const { expect } = chai;

  // describe('LeaderBoards', () => {
  //   it('Home', async () => {
  //     const result = await chai.request(app).post('/leaderboard/home')

  //     expect(result[0]).to.deep.equal({
  //       "name": "Santos",
  //       "totalPoints": 9,
  //       "totalGames": 3,
  //       "totalVictories": 3,
  //       "totalDraws": 0,
  //       "totalLosses": 0,
  //       "goalsFavor": 9,
  //       "goalsOwn": 3,
  //       "goalsBalance": 6,
  //       "efficiency": "100.00"
  //     });
  //   });

  //   it('Away', async () => {
  //     const result = await chai.request(app).post('/leaderboard/away')

  //     expect(result[0]).to.deep.equal({
  //       "name": "Palmeiras",
  //       "totalPoints": 6,
  //       "totalGames": 2,
  //       "totalVictories": 2,
  //       "totalDraws": 0,
  //       "totalLosses": 0,
  //       "goalsFavor": 7,
  //       "goalsOwn": 0,
  //       "goalsBalance": 7,
  //       "efficiency": "100.00"
  //     });
  //   });

  //   it('All', async () => {
  //     const result = await chai.request(app).post('/leaderboard')

  //     expect(result[0]).to.deep.equal({
  //       "name": "Palmeiras",
  //       "totalPoints": 13,
  //       "totalGames": 5,
  //       "totalVictories": 4,
  //       "totalDraws": 1,
  //       "totalLosses": 0,
  //       "goalsFavor": 17,
  //       "goalsOwn": 5,
  //       "goalsBalance": 12,
  //       "efficiency": "86.67"
  //     });
  //   });

  //   it('OrderRank', async () => {
  //     const mockA = [
  //       {
  //         "name": "Santos",
  //         "totalPoints": 11,
  //         "totalGames": 5,
  //         "totalVictories": 3,
  //         "totalDraws": 2,
  //         "totalLosses": 0,
  //         "goalsFavor": 12,
  //         "goalsOwn": 6,
  //         "goalsBalance": 6,
  //         "efficiency": "73.33"
  //       },
  //       {
  //         "name": "Palmeiras",
  //         "totalPoints": 13,
  //         "totalGames": 5,
  //         "totalVictories": 4,
  //         "totalDraws": 1,
  //         "totalLosses": 0,
  //         "goalsFavor": 17,
  //         "goalsOwn": 5,
  //         "goalsBalance": 12,
  //         "efficiency": "86.67"
  //       },
  //       {
  //         "name": "Corinthians",
  //         "totalPoints": 12,
  //         "totalGames": 5,
  //         "totalVictories": 4,
  //         "totalDraws": 0,
  //         "totalLosses": 1,
  //         "goalsFavor": 12,
  //         "goalsOwn": 3,
  //         "goalsBalance": 9,
  //         "efficiency": "80.00"
  //       },
  //     ];

  //     const orderR = LeaderBoardOpe.orderRank(mockA);

  //     expect(orderR).to.deep.equal([{
  //       "name": "Palmeiras",
  //       "totalPoints": 13,
  //       "totalGames": 5,
  //       "totalVictories": 4,
  //       "totalDraws": 1,
  //       "totalLosses": 0,
  //       "goalsFavor": 17,
  //       "goalsOwn": 5,
  //       "goalsBalance": 12,
  //       "efficiency": "86.67"
  //     },
  //     {
  //       "name": "Corinthians",
  //       "totalPoints": 12,
  //       "totalGames": 5,
  //       "totalVictories": 4,
  //       "totalDraws": 0,
  //       "totalLosses": 1,
  //       "goalsFavor": 12,
  //       "goalsOwn": 3,
  //       "goalsBalance": 9,
  //       "efficiency": "80.00"
  //     },{
  //       "name": "Santos",
  //       "totalPoints": 11,
  //       "totalGames": 5,
  //       "totalVictories": 3,
  //       "totalDraws": 2,
  //       "totalLosses": 0,
  //       "goalsFavor": 12,
  //       "goalsOwn": 6,
  //       "goalsBalance": 6,
  //       "efficiency": "73.33"
  //     },
  //     ])
  //   });

  //   it('Win, Lose, Draw', async () => {
  //     const placar = {
  //       win: 4,
  //       lose: 4,
  //       draw: 4,
  //     };

  //     const placarWw = LeaderBoardOpe.ifWin(placar.win, 1, 0);
  //     expect(placarWw).to.be.equal(5);
  //     const placarLw = LeaderBoardOpe.ifLose(placar.win, 1, 0);
  //     expect(placarLw).to.be.equal(4);
  //     const placarDw = LeaderBoardOpe.ifWin(placar.win, 1, 0);
  //     expect(placarDw).to.be.equal(4);

  //     const placarWl = LeaderBoardOpe.ifWin(placar.win, 0, 1);
  //     expect(placarWl).to.be.equal(4);
  //     const placarLl = LeaderBoardOpe.ifLose(placar.win, 0, 1);
  //     expect(placarLl).to.be.equal(5);
  //     const placarDl = LeaderBoardOpe.ifWin(placar.win, 0, 1);
  //     expect(placarDl).to.be.equal(4);

  //     const placarWd = LeaderBoardOpe.ifWin(placar.win, 1, 1);
  //     expect(placarWd).to.be.equal(4);
  //     const placarLd = LeaderBoardOpe.ifLose(placar.win, 1, 1);
  //     expect(placarLd).to.be.equal(4);
  //     const placarDd = LeaderBoardOpe.ifWin(placar.win, 1, 1);
  //     expect(placarDd).to.be.equal(5);

  //   });


  //   it('Outro test', async () => {});
  //   it('Outro test', async () => {});
  //   it('Outro test', async () => {});
  // });
