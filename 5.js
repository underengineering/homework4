/*
    * Write a JavaScript conditional statement to sort ten numbers.
    */

const numbers = [5, 2, 9, 1, 5, 6, 3, 8, 10, 4];

for (const i in numbers) {
    let a = numbers[i];
    for (const j in numbers) {
        let b = numbers[j];
        if (a > b) {
            [a, b] = [b, a];
            numbers[i] = a;
            numbers[j] = b;
        }
    }
}

console.log(numbers);

