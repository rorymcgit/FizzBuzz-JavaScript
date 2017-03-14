function FizzBuzz() {
}

FizzBuzz.prototype.play = function(num) {
  if (this._isDivisibleBy(15, num)) {
    return 'Fizzbuzz';
  } else if (this._isDivisibleBy(3, num)) {
    return 'Fizz';
  } else if (this._isDivisibleBy(5, num)) {
    return 'Buzz';
  } else {
    return num;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}


// Print all numbers 1 - 100, replacing numbers with fizz, buzz or fizzbuzz where applicable
var fizzbuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
    console.log(fizzbuzz.play(i));
}
