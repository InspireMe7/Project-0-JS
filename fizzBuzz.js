export function FizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        return console.log("Fizz");
    }
    else if (num % 5 === 0) {
        return console.log("Buzz");
    }
    else {
        return console.log(num);
    }
}