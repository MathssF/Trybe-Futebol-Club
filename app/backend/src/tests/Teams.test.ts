// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import App from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { app } = new App();

// const { expect } = chai;

// describe('Testando o Times', () => {
//   it('All: deve retornar 200', async () => {
//     const result = await chai.request(app).post('/teams')

//     expect(result.status).to.be.equal(200);
//   });

//   it('Especifico: Deve retornar o que foi chamado, e 200', async () => {
//     const result = await chai.request(app).post('/teams/1')

//     expect(result.body).to.deep.equal({ id: 1, teamName: "Avaí/Kindermann" });
//     expect(result.status).to.be.equal(200);
//   });
// });
