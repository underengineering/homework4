/*
    * Напишите программу, которая принимает два массива, один с именами студентов, второй с одной оценкой, каждого студента
    * Проверяйте, что бы массивы были одинаковыми по количеству элементов
    * На выводе программа должна выдать среднюю оценку по студентам
    * И оценку каждого студента буквой: <60 - F, <70 - D, <80 - C, <90 - B, <100 - A
    */

const students = ["Попов", "Иванов", "Сидоров", "Козлов"];
const grades = [80, 97, 47, 60];

if (students.length !== grades.length) {
    console.log("Массивы не равны");
    return;
}

let gradeSum = 0;
for (const i in students) {
    const grade = grades[i];
    gradeSum += grade;

    let score;
    if (grade < 60) {
        score = "F";
    } else if (grade < 70) {
        score = "D";
    } else if (grade < 80) {
        score = "C";
    } else if (grade < 90) {
        score = "B";
    } else {
        score = "A";
    }

    console.log(`${students[i]}: ${score}`);
}

const averageGrade = gradeSum / students.length;
console.log("Средняя оценка:", averageGrade);
