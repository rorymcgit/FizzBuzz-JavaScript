
// expect divisible by 3 = 'fizz'
// expect divisible by 5 = 'buzz'
// expect divisible by 5 & 3 = 'fizzBuzz'

describe("Fizzbuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('Fizzbuzz');
    });

    it('fizzbuzzes for 30', function() {
      expect(fizzbuzz.play(30)).toEqual('Fizzbuzz');
    });
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  });
});
