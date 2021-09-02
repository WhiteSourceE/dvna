var mathjs = require('mathjs');

const trueEval = function (text) {
  return mathjs.eval(text);
};

module.exports.eval = trueEval;
