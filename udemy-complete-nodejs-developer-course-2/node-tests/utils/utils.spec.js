const { add, asyncAdd, square, asyncSquare, setName } = require('./utils');
const expect = require('chai').expect;

describe('utils.js', () => {
  it('should add two numbers', () => {
    const results = add(33, 11);

    expect(results)
      .to.be.a('number')
      .that.equals(44);
  });

  it('should async add two numbers', done => {
    asyncAdd(4, 3, sum => {
      expect(sum)
        .to.be.a('number')
        .that.equals(7);
      done();
    });
  });

  it('should square a number', () => {
    const results = square(9);

    expect(results)
      .to.be.a('number')
      .that.equals(81);
  });

  it('should async square a number', done => {
    asyncSquare(9, square => {
      expect(square)
        .to.be.a('number')
        .that.equals(81);
      done();
    });
  });

  it('setName sets first and last names', () => {
    const results = setName({ id: 42 }, 'Benjamin Sisko');

    expect(results)
      .to.be.an('object')
      .that.includes({ firstName: 'Benjamin', lastName: 'Sisko' });
  });
});
