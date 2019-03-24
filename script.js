//1

const hello = 'Hello';
const word = 'Word!';

const helloWord = `${hello} ${word}`;


//2
multiply = (x, y = 1) => x * y;

//3 

/* 

MOJE PIERWSZE PODEJŚCIE - zakończone failem
sum = 0

average = (...args) => args.forEach(arg => arg += sum) / args.length;

const av = average(1, 2, 3)

console.log(av)

*/


//4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = data;