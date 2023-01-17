import * as express from 'express';

import MatchesCon from '../controller/MatchesCon';

const Matches = express.Router();

Matches.get('/', MatchesCon.getMatches);
Matches.post('/', MatchesCon.postMatches);
Matches.patch('/:id/finish', MatchesCon.finishMatches);
Matches.patch('/:id', MatchesCon.updateMatches);

export default Matches;
