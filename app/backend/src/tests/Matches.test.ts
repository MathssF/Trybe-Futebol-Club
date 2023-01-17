import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Testando a rotas Matches', () => {
  it('O Get deve dar status 200 e', async () => {
    const result = await chai.request(app).get('/matches')

    expect(result.status).to.be.equal(200);
  });

  it('Testar filtro', async () => {
    const result = await chai.request(app).get('/matches/?inProgress=true')

    expect(result.status).to.be.equal(200);
    expect(result.body[0]).to.deep.equal({
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Internacional"
      }
    });
  });

  // it('', async () => {

  // });

  // it('', async () => {

  // });
});
