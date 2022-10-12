import util from "util";

const firstName = "Ridwan";
const lastName = "Nurfauzi";
const number = 1;

console.info(`Hello ${firstName} ${lastName} number ${number}.`); // Tanpa util

console.info(util.format("Hello %s %s number %i.", firstName, lastName, number)); // Dengan util

const person = {
    firstName: firstName,
    lastName: lastName,
    number: number
};

console.info(`Person : ${JSON.stringify(person)}`); // Tanpa util
console.info(util.format("Person : %j",person)); // Dengan util