/*
    * Напишите программу на JavaScript, которая принимает десять целых чисел как массив и отображает большее
    */

const array = [6, 9, 7, 5, 7, 9, 5, 3, 7, 9];
let maxValue = -Infinity;
for (const value of array)
    maxValue = Math.max(maxValue, value);

console.log("Максимальное число:", maxValue);
