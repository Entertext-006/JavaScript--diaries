let array=['apple', 'banana', 'cherry', 'date', 'elderberry'];
// Function to get the first element of the array
console.log('First element:', array[0]);

array.push('fig');
console.log('After push:', array);
array.pop();
console.log('After pop:', array);

console.log('Array length:', array.length);
array.sort();
console.log('Sorted array:', array);
console.log('Reversed array:', array.sort().reverse());

console.log('Index of cherry:', array.indexOf('cherry'));

//for loop displaying each element
for(let fruit of array){
    console.log(fruit);
}

let fruits=['apple', 'banana', 'orange', 'apple', 'mango', 'banana'];

fruits.forEach(capitalizeFruits);
fruits.forEach(displayFruits);

function upperCase(element, index, array) {
    array[index]=element.toUpperCase();
}

function lowerCase(element, index ,array){
    array[index]=element.toLowerCase();
}

function capitalizeFruits(element, index, array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}

function displayFruits(){
    console.log(fruits);
}

const numbers=[1,2,3,4,5];
const displaying= numbers.map(displayNum);
const squaring=numbers.map(squareNum);
const cubing=numbers.map(cubeNum);

console.log('Displaying numbers:', displaying);
console.log('Squaring numbers:', squaring);
console.log('Cubing numbers:', cubing);

function displayNum(element){
    console.log(numbers);
}

function squareNum(element){
    return Math.pow(element,2);
}

function cubeNum(element){
    return Math.pow(element,3);
}


const chara=['sara','tom','john','anna'];
const uppers=chara.map(Upper);
const lowers=chara.map(Lower);
const capitalizes=chara.map(Capitalize);

console.log('Uppercase characters:', uppers);
console.log('Lowercase characters:', lowers);
console.log('Capitalized characters:', capitalizes);

function Upper(element, index, array){
    array[index]=element.toUpperCase();
}

function Lower(element, index, array){
    array[index]=element.toLowerCase();
}

function Capitalize(element, index, array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}

const dates=['2023-10-01','2024-01-15','2022-12-31'];
const formattedDates=dates.map(formatDate); 

console.log('Formatted Dates:', formattedDates);

function formatDate(element){
    const [year, month, day]=element.split('-');
    return `${day}/${month}/${year}`;
}

const value=[1,2,3,4,5,6,7];
const evens=value.filter(isEven);
console.log('Even numbers:', evens);


function isEven(element){
    return element % 2 === 0;
}

const odds=value.filter(isOdd);
console.log('Odd numbers:', odds);  

function isOdd(element){
    return element % 2 !== 0;
}

const words=['level','hello','radar','world','madam','test'];
const palindromes=words.filter(isPalindrome);

console.log('Palindromic words:', palindromes); 

function isPalindrome(element){
    const reversed=element.split('').reverse().join('');
    return element === reversed;
}


const numbers2=[10,20,30,40,50];
const sum=numbers2.reduce(sumNumbers);

console.log('Sum of numbers:', sum);

function sumNumbers(accumulator, currentValue){
    return accumulator + currentValue;
}

const maxValue=numbers2.reduce(maxNumber);
console.log('Maximum value:', maxValue);
function maxNumber(accumulator, currentValue){
    return Math.max(accumulator, currentValue);
}

const num=[1,2,3,4,5];

const square= num.map((element) => Math.pow(element,2));
console.log('Squared numbers using arrow function:', square);

const cube= num.map((element) => Math.pow(element,3));
console.log('Cubed numbers using arrow function:', cube);

const evenNumbers=num.filter((element) => element % 2 === 0);
console.log('Even numbers using arrow function:', evenNumbers);