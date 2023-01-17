import * as express from 'express';

import LeaderBoardCon from '../controller/LeaderBoardCon';

const LeaderBoard = express.Router();

LeaderBoard.get('/', LeaderBoardCon.getBoard);
LeaderBoard.get('/home', LeaderBoardCon.getHomeBoard);
LeaderBoard.get('/away', LeaderBoardCon.getAwayBoard);

export default LeaderBoard;
