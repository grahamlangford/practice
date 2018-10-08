const request = require('supertest');
const expect = require('chai').expect;

const app = require('./server').app;

describe('server.js', () => {
  context('GET /', () => {
    it('returns error response', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).to.include({ error: 'Page not found.' });
        })
        .end(done);
    });
  });

  context('GET /users', () => {
    it('returns array of users', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).to.deep.include({ name: 'John Smith', age: 35 });
        })
        .end(done);
    });
  });
});
