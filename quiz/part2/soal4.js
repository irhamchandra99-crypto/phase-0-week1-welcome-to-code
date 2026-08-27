// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word3 = 'wow JavaScript is so cool';

let exampleFirstWord3 = word3.substring(0, 3);
let secondWord = word3.substring(4, 14);
let thirdWord = word3.substring(15, 18);
let fourthWord = word3.substring(18, 20);
let fifthWord = word3.substring(21, 25);

let firstWordLength = exampleFirstWord3.length;
let secondWordLength = secondWord.length;
let thirdWordLength = thirdWord.length;
let fourthWordLength = fourthWord.length;
let fifthWordLength = fifthWord.length;

console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);