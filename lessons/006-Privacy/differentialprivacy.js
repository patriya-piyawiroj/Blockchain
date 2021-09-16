// Differential Privacy
// See at...
// __
// Injecting random noise in to data sets so it can not be traced back


/*
This experiment aims to measure the percentage of users on the internet who are actually dogs.

Real dogs would like to remain anonymous. After all, on the internet nobody knows you're a dog.
*/

// real (secret) populations
let numPeople = 90;
let numDogs = 10;

// TIP! try making the populations larger. What happens to the accuracy of the
// differentially-private estimate when we do?
const bigPopulation = true;
if (bigPopulation) {
    numPeople *= 10000;
    numDogs *= 10000;
}

// answer returns a differentially-private answer to the question "Are you a dog?". Takes `realDog`
// as input, depending on whether the user answering the question is truly a dog.
function answer(realDog) {
    if (Math.random() < .5) {
        // answer truthfully
        return realDog;
    }
    // answer randomly
    return Math.random() < .5;
}

// total counts the number of responses to the question "Are you a dog?". Some respondents are
// telling the truth, other are not
let total = 0;

// ask all the dogs
for (let i = 0; i < numDogs; i++) {
    if (answer(true)) { total++; }
}

let temp = total
console.log(`num dogs answering true = ${total}`)

// ask all the people
for (let i = 0; i < numPeople; i++) {
    if (answer(false)) { total++; }
}

console.log(`num people answering false = ${total-temp}`)

// 50% of the answers are true. The other 50% have a 50% probability of being true, and a 50% probability of being false
const estimate = 2 * (total / (numPeople+numDogs) - .25);
console.log(`total = ${total}`)
console.log(`num people = ${numPeople}`)
console.log(`num dogs = ${numDogs}`)
console.log(`estimate = ${estimate}`)
console.log(`total / (numPeople+numDogs) = ${total / (numPeople+numDogs)}`)


// (2 * total)/(numPeople+numDogs) - .25;
// (total)/(numPeople) - .25;

function percentage(x) {
    return (100 * x).toFixed(2) + '%';
}

console.log(`The actual percentage of dogs on the internet: ${percentage(numDogs/(numPeople+numDogs))}`);
console.log(`Differentially-private estimate of dogs on the internet: ${percentage(estimate)}`);