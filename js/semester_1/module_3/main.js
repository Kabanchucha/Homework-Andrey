// Задача 1
let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;
let area = Math.abs((x2 - x1) * (y2 - y1) );
console.log("Площадь:", area)

//Задача 2
let a = 13.123456789;
let b = 2.123;
let n = 5;
let normA = Math.round(a * Math.pow(10, n));
let normB = Math.round(b * Math.pow(10, n));
console.log('Исходные числа равны', normA === normB);
console.log('Число A больше числа B', normA > normB);
console.log('Число A меньше числа B', normA < normB);
console.log('Число A больше или равно числу B', normA >= normB);
console.log('Число A меньше или равно числу B', normA <= normB);
console.log('Число A не равно числу B', normA !== normB);

// Задача 3
let N = -3;
let M = -10;
let range = Math.abs(N - M);
let NumberInRange = Math.round((Math.random() * range));
let min = Math.min(N,M);
console.log(min + NumberInRange);
