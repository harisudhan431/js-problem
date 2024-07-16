
// Array  Creation and Intialization
let arr =[1,2,3,4,5,6];
console.log(arr);

// Array Manipulation
let arr1=[1,2,3,4,5]
arr1.push(12);
console.log (arr1);
arr1.pop();
console.log(arr1);

// Array Searching 
let arr2=[12,24,56,78,99];
console.log(arr2.indexOf(24));
console.log(arr2.includes(55));

// Array Sorting
function sorting(arr3){
    console.log(arr3.sort())
    console.log(arr3.reverse());
}
let arr3=[1,43,55,65,1,2];
sorting(arr3);

// Array Joining
// 
const names = ["Hari", "Sudhan", "Pon", "Venkadesh"];
let text = names.join();
console.log(text);
let names2="I am student of Hindusthan";
console.log(names2.split(" "));