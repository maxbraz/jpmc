// Calculator Class
class Calculator {
  constructor () {
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      return NaN;
    }

    return num1 / num2;
  }
}

// Scientific Calculator Class
class ScientificCalculator extends Calculator {
  constructor() {
    super();
  }

  sin(num) {
    return Math.sin(num);
  }

  cos(num) {
    return Math.cos(num);
  }

  tan(num) {
    return Math.tan(num);
  }

  log(num) {
    return Math.log(num);
  }
}

// withExponents Functional Mixin
withExponents = function() {
  this.pow = function(num1, num2) {
    return Math.pow(num1, num2);
  };

  this.multiplyExp = function (arr1, arr2) {
    return Math.pow(arr1[0], arr1[1]) * Math.pow(arr2[0], arr2[1]);
  };

  this.divideExp = function (arr1, arr2) {
    return Math.pow(arr1[0], arr1[1]) / Math.pow(arr2[0], arr2[1]);
  };
};

// delay Function (promise)
delay = function(milliseconds, classConstructor, classMethod, params) {
  return new Promise((resolve, reject) => {
    if (classConstructor[classMethod] === undefined) {
      reject(`the method ${method} doesn't exist.  please enter a valid method`);
    }
    let result = classConstructor[classMethod](params[0], params[1]);
    setTimeout(() => { resolve(result); }, milliseconds);
  });
};

module.exports = { Calculator, ScientificCalculator, withExponents, delay };