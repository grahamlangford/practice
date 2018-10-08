module.exports = {
  add: (a, b) => a + b,

  asyncAdd: (a, b, callback) => {
    setTimeout(() => {
      callback(a + b);
    }, 1000);
  },

  square: x => x * x,

  asyncSquare: (x, callback) => {
    setTimeout(() => {
      callback(x * x);
    }, 1000);
  },

  setName: (user, fullName) => {
    const names = fullName.split(' ');

    return { ...user, firstName: names[0], lastName: names[1] };
  }
};
