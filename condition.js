/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

/*
let weight=100;
let height=2;
let bmi = weight / (height)**2

if (bmi <18.5) {
    console.log("you are under weight");
}
else if(bmi >=18.5 && bmi<=24.9) {
    console.log("you are normal");
}
else if(bmi>=25 && bmi<=29.9){
    console.log("you are over weight");
}
else {
    console.log("you are obese");
}
console.log(bmi);
*/

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let score = prompt("Enter the score:");
// let grade;

// if (score>=90 && score<=100) {
//     grade ="A";
// }
// else if (score>=80 && score<=89) {
//     grade ="B"
// }
// else if (score>=70 && score<=79) {
//     grade ="C"
// }
// else if (score>=60 && score<=69) {
//     grade ="D"
// }
// else if (score>=0 && score<=59) {
//     grade ="F"
// }
// console.log(grade);

/*Write a program that determines whether a given number is positive or negative.*/

// let num = prompt("enter a number");
// let result;

// if(num>0) {
//     result = (num,"is a positive number");
// }
// else if(num == 0) {
//     result = (num, "is zero");
// }
// else if (num<0){
//     result = (num, "is negative")
// }
// console.log(result);

/*Write a program that checks if a number is even or odd.*/
// let num = prompt("enter an integer number");
// let result;

// if (num%2 == 0) {
//     result =(num, "is a even number");
// }
// else {
//     result = (num, "is an odd number");
// }
// console.log(result);

/*Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.*/

// let age = prompt ("enter your age: ");
// let ticketPrice;
// if (age<=12) {
//     ticketPrice = ("ticket price 5tk");
// }
// else if (age<=18) {
//     ticketPrice = ("ticket price 10tk");
// }
// else if (age<=60) {
//     ticketPrice = ("ticket price 20tk");
// }
// else if (age>60) {
//     ticketPrice = ("ticket price 15tk");
// }
// console.log(ticketPrice);

// for (count = 1; count<=10; count++)
// {
//     console.log("shafriki islam")
// }

// let sum =0;
// for (i=1; i<=10; i++) {
//     sum =sum+i
    
// }
// console.log("sum of first ten numbers =",sum);

// let i =1;
// let sum = i+1;
// while (i<23) {
//    i++;
// }
// console.log("sum = ",sum)
// let size =0;
// let name = "shafriki islam shemul";
// for (let i of name) {
//     console.log ("i = ", i);
//     size++;
// }
// console.log("size = ",size);

// let student = {
//     name: "shafriki islam",
//     age: 25,
//     cgpa: 2.75,
//     isPass: true,
// };

// for (let key in student) {
//     console.log("key = ",key, "value = ",student[key])
// }

// for (num=1; num<=100; num++) {
//     console.log("number: ",num);
// }
// let num=0;
// while (num<=100) {
//     console.log("number: ",num);
//     num++;
// }
// let num = 0;
// do {
//     console.log("number: ",num);
//     num++;
// } while (num<=100);

// for (num=0; num<=100; num++) {
//     if (num%2 != 0) {
//         console.log("number: ",num)
//     }
// }

// let num =0;

// while (num<=100){
//     if (num%2 != 0){
//         console.log("number: ", num);
//     }
//     num++;
// }

// let password =1234;
// let userGiven = prompt("Enter the password: ");

// while (userGiven != password) {
//     userGiven = prompt("You entered wrong. Try again");
// }
// console.log("welcome to your profile");


// let heros = ["ironman", "spiderman", "batman", "saktiman", "shafriki"];
// // for(idx=0; idx<heros.length; idx++) {
// //     console.log(heros[idx]);
// // }
// for(let hero of heros){
//     console.log(hero);
// }

let cities = ["dhaka", "rajshahi", "natore", "sylhet", "rangpur","chapainawabganj"];

// for (idx = 0; idx<cities.length; idx++) {
//     console.log(cities[idx])
// }
// let idx=0;
// while (idx <cities.length) {
//     console.log(cities[idx]);
//     idx++;
// }
//  for (let city of cities) {
//      console.log("name: ", city.toUpperCase());
//  }

//  for (let city in cities) {
//      console.log(cities[city.toUpperCase()]);
//  }
// let marks = [97,34 ,34,25, 54, 64, 65, 65, 24, 60];

// let sum = 0;
// for (let val of marks) {
//     sum+= val;

// }
// let avg = sum/marks.length;
// console.log(avg);

// let box = ["apple", "banana", "litchi", "jackfruit", "mango"];



function calculateMoney(ticketSale) {
    if (ticketSale<0) {
        return "invalid number"
    }
    let remainingAmount = ticketSale *120 - (500 + 8 * 50)

    return remainingAmount
}
// console.log(calculateMoney(10));
// console.log(calculateMoney(-1));
// console.log(calculateMoney(100));
// console.log(calculateMoney(109387));

// function brushTeeth() {
//     console.log("pick up brush");
//     console.log("2 min ghoso");
//     console.log("fena felo");
// }
// brushTeeth();

// function macherTorkari(mach, shobji, mosla) {
//     console.log("tel gorom korun");
//     console.log("mosla de");
//     console.log("shobji de");
//     console.log(mach + " din");

//     return "sussadu macher torkarki prostut";
// }
// const result =macherTorkari ("ilish", "alu", "holud");
// console.log(result);

// function square(number) {
//     let square = number*number;
//     console.log("given number square is: ",square);
    

// }
// square(5);

// function add(x,y) {
//     const add = x+y;
//     console.log("result: ",add);
// }
// add(2,3);

// function calculateMoney(ticketCount) {
//     // Check if the input is a negative number
//     if (ticketCount < 0) {
//         return "Error: Ticket count cannot be negative.";
//     }

//     // Constants for the ticket price, guard cost, and staff lunch cost
//     const ticketPrice = 120;
//     const guardCost = 500;
//     const staffLunchCost = 50;
//     const numberOfStaff = 8;

//     // Calculate total income from ticket sales
//     const totalIncome = ticketCount * ticketPrice;

//     // Calculate total expenses
//     const totalExpenses = guardCost + (numberOfStaff * staffLunchCost);

//     // Calculate the remaining money after expenses
//     const remainingMoney = totalIncome - totalExpenses;

//     // Return the remaining money
//     return remainingMoney;
// }

// // Example usage:
// console.log(calculateMoney(10)); // Output: 300
// console.log(calculateMoney(-5)); // Output: Error: Ticket count cannot be negative.
// console.log(calculateMoney(1055))

// function add(x, y) {
//     const sum = x+y;
//     console.log("sum of two numbers: ", sum);
//     const sub =x-y;
//     console.log("sub of two numbers: ", sub);console.log("sum of two numbers: ", total);
// }
// add(1,23);

// function showName() {
//     const name ="shafriki islam";
//     return name;
// }
// const giveName = showName()
// console.log(giveName);
/*
const numbers =[45,354,345,2,34,54,2,543,2];

let biggest = numbers[0];
console.log("before loop: ",biggest);

for(let i=1; i<numbers.length; i++) {
    if(numbers[i]>biggest) {
        biggest =numbers[i];
    }
}
console.log("after loop: ",biggest);
*/

function biggestNumber(num) {
    let biggest = num[0];

    console.log("before loop: ",biggest);

for(let i=1; i<num.length; i++) {
    if(num[i]>biggest) {
        biggest =num[i];
    }
}
return biggest;

}
const numbers = [23,43,12, 43, 54,54, 23,123, 500]
const result =biggestNumber(numbers);
console.log(result);