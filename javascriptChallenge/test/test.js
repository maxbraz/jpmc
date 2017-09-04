const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

const { Calculator, ScientificCalculator, withExponents, delay } = require('../src/index.js');

// Calculator Tests
describe( 'Calculator', () => {
  var calculator;
  beforeEach( () => {
    calculator = new Calculator();
  });
  it( 'adds 1 and 2', () => {
    expect( calculator.add( 1, 2 ) ).to.equal( 3 );
  });
  it( 'subtracts 2 from 9', () => {
    expect( calculator.subtract( 9, 2 ) ).to.equal( 7 );
  });
  it( 'multiplies 4 and 3', () => {
    expect( calculator.multiply( 4, 3 ) ).to.equal( 12 );
  });
  it( 'divides 10 by 2', () => {
    expect( calculator.divide( 10, 2 ) ).to.equal( 5 );
  });
  it( 'does not divide by 0', () => {
    expect( calculator.divide( 5, 0 ) ).to.be.NaN;
  });
});

// Scientific Calculator Tests
describe( 'ScientificCalculator', function() {
  var calculator;
  beforeEach( () => {
    calculator = new ScientificCalculator();
  } );
  it( 'extends Calculator', () => {
    expect( calculator ).to.be.instanceOf( Calculator );
    expect( calculator ).to.be.instanceOf( ScientificCalculator );
  } );
  it( 'returns the sine of PI / 2', () => {
    expect( calculator.sin( Math.PI / 2 ) ).to.equal( 1 );
  } );
  it( 'returns the cosine of PI', () => {
    expect( calculator.cos( Math.PI ) ).to.equal( -1 );
  } );
  it( 'returns the tangent of 0', () => {
    expect( calculator.tan( 0 ) ).to.equal( 0 );
  } );
  it( 'returns the logarithm of 1', () => {
    expect( calculator.log( 1 ) ).to.equal( 0 );
  } );
} );

// withExponents Tests
describe( 'withExponents', () => {
  var calculator;
  beforeEach( () => {
    calculator = new Calculator();
    withExponents.call( calculator );
  } );
  it( 'returns 2^3', () => {
    expect( calculator.pow( 2, 3 ) ).to.equal( 8 );
  } );
  it( 'multiplies 2^3 and 2^4', () => {
    expect( calculator.multiplyExp( [ 2, 3 ], [ 2, 4 ] ) ).to.equal( 128 );
  } );
  it( 'divides 2^3 by 2^5', () => {
    expect( calculator.divideExp( [ 2, 3 ], [ 2, 5 ] ) ).to.equal( 0.25 );
  } );
} );

// delay Tests
describe( 'withExponents', () => {
  var calculator;
  beforeEach( () => {
    calculator = new Calculator();
    withExponents.call( calculator );
  } );
  it( 'returns 2^3', () => {
    expect( calculator.pow( 2, 3 ) ).to.equal( 8 );
  } );
  it( 'multiplies 2^3 and 2^4', () => {
    expect( calculator.multiplyExp( [ 2, 3 ], [ 2, 4 ] ) ).to.equal( 128 );
  } );
  it( 'divides 2^3 by 2^5', () => {
    expect( calculator.divideExp( [ 2, 3 ], [ 2, 5 ] ) ).to.equal( 0.25 );
  } );
} );
