import * as express from 'express';

import TeamsCon from '../controller/TeamsCon';

const Teams = express.Router();

Teams.get('/', TeamsCon.teamsList);
Teams.get('/:id', TeamsCon.teambyId);

export default Teams;
