// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: "Kyle",
    cities: ['Newbury', 'Fairview', 'San Jose'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    numbers: [10, 20, 30],
    // multiplyBy - single number
    multiplyBy: 3,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]