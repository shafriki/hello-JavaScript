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