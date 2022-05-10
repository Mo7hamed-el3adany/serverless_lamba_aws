const Primes = require("../models/primesModel");

const calcCtrl = {
  calcNumbers: async (req, res, next) => {
    try {
      let { limit } = req.body;
      var value,
        result = [];
      function nextPrime(value) {
        if (value > 2) {
          var i, q;
          do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
              i += 2;
            }
          } while (i <= q);
          return value;
        }
        return value === 2 ? 3 : 2;
      }
      for (let i = 0; i < limit; i++) {
        value = nextPrime(value);
        result.push(value);
      }
      let sum = result.reduce(function (a, b) {
        return a + b;
      }, 0);
      const primeNumbers = new Primes({
        limit,
        result,
        sum,
      });
      // Save mongodb
      await primeNumbers.save();
      return res.status(200).json({
        "Primes are": result,
        sum: sum,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = calcCtrl;
