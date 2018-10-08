const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');

const app = rewire('./app');

const expect = chai.expect;
chai.use(sinonChai);

describe('app.js', () => {
  let sandbox;
  let saveUserSpy;
  let db;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    saveUserSpy = sandbox.spy();

    db = {
      saveUser: saveUserSpy
    };
    app.__set__('db', db);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call saveUser with user object', () => {
    const email = 'mockUser@example.com';
    const password = 'mockPassword';

    app.handleSignup(email, password);
    expect(saveUserSpy).to.have.been.calledWith({ email, password });
  });
});
