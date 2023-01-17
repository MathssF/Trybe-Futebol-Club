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

describe('Testando o Login', () => {
  it('Caso tenha um email que não consta no banco de dados, deve retornar o erro 401', async () => {
    const result = await chai.request(app).post('/login').send({
      email: 'error@matheusFlores.com',
      password: 'Acabaci_lendário_123',
    });

    expect(result.body).to.deep.equal({ message: 'Incorrect email or password' });
    expect(result.status).to.be.equal(401);
  })

  it('Caso a senha esteja errada, deve retornar o erro 401', async () => {
    const result = await chai.request(app).post('/login').send({
      email: 'user@user.com',
      password: 'Acabaci_lendário_1234',
    });

    expect(result.body).to.deep.equal({ message: 'Incorrect email or password' });
    expect(result.status).to.be.equal(401);
  })

  it('Caso tenha um email ausente, error 400', async () => {
    const result = await chai.request(app).post('/login').send({
      password: 'Ass MS',
    });

    expect(result.body).to.deep.equal({ message: 'All fields must be filled' });
    expect(result.status).to.be.equal(400);
  })

  it('Caso tenha uma senha ausente, error 400', async () => {
    const result = await chai.request(app).post('/login').send({
      email: 'error@matheusFlores.com',
    });

    expect(result.body).to.deep.equal({ message: 'All fields must be filled' });
    expect(result.status).to.be.equal(400);
  })

  // it('Se tiver tudo certo, retorna 200', async () => {
  //   const result = await chai.request(app).post('/login').send({
  //     email: 'user@user.com',
  //     password: 'Acabaci_lendário_123',
  //   });

  //   expect(result.status).to.be.equal(200);
  // });
});
