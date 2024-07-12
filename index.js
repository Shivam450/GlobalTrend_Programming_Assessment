//1. Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function FizzBuzz(){
  let result=[]
  for(let i=1; i<=100; i++){
    if(i%5==0 && i%3==0){
      result.push("FizzBuzz");
    }
    else if(i%3==0){
      result.push("Fizz");
    }
    else if(i%5==0){
      result.push("Buzz");
    }
    else{
      result.push(i)
    }
  }
  return result;
}
//Time complexity O(n)
//Space Complexity O(1)
console.log(FizzBuzz());

//2. Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.
function arithmatic(str) {
  //regex expression Remove spaces
  str = str.replace(/\s+/g, '');
  
  // Use eval to evalute the expresion
  return eval(str);
}
console.log(arithmatic("3 + 5 - 2 + 8"))


//3. Write a function that takes a nested array and returns a flattened array.

function NestedArrytosingle(arr){
  let result = [];
  for(let i=0; i<arr.length; i++){
    //now here i check if arry is nested 
    if(Array.isArray(arr[i])){
      for(let j=0; j<arr[i].length; j++){
        result.push(arr[i][j])
      }
    }
    //here if not nested
    else{
      result.push(arr[i])
    }
  }
  return result;
}
//Time complexity O(n)
//Space Complexity O(n)
console.log(NestedArrytosingle([[1, 2], [3, 4], 5]))



//4. Write a function that checks if two given strings are anagrams of each other.
function isAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false
  }
  //here i create a charMap or charcount
  const charCount = {}; //here charCount will have smae space as str1 so, space complexity O(n)
  for(let char of str1){
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    //here if my char = undefined then it put 1 like t:1, r:1
  }
  for(let char of str2){
    //if does'nt include char of str2 then false
    if(!charCount[char]){
      return false;
    } //here char-- if was there
    charCount[char]--;
  }
  return true;
}
//Time complexity: O(n)
//Space Complexity: O(n)
console.log(isAnagram("traingle", "integral"))



//5. Write a function that takes an array and returns a new array with duplicates removed.
function removeDuplicate(arr){
  let uniqueArry = [...new Set(arr)];
  return uniqueArry
}
//Time complexity O(n)
//Space complexity O(n)
console.log(removeDuplicate([1, 2, 3, 3, 4, 5, 5, 6]))

//6. Write a function that takes a string and capitalizes the first letter of each word in the string.

function CapitalizeWord(str){
  let words = str.split(' ');

  for(let i=0; i<words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  return words.join(' ');
}
//Time Complexity O(n)
//Space Complexity O(m,n)
console.log(CapitalizeWord("hello world"))



//7. Write a function that generates the first n numbers of the Fibonacci sequence.
function fibonnacci(n){
  let sequence = [];
  if (n >= 1) {
      sequence.push(0);
  }
  if (n >= 2) {
      sequence.push(1);
  }
  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
} 
//Time Complexity O(n)
//space Complexity O(n)
console.log(fibonnacci(10))

//8.Implement a simple HashMap class with put, get, and remove methods.
class HashMap {
  constructor() {
      this.map = {};
  }
  put(key, value) {
      this.map[key] = value;
  }
  get(key) {
      return this.map[key];
  }
  remove(key) {
      if (this.map.hasOwnProperty(key)) {
          delete this.map[key];
      }
  }
}
//here i used a constructor class method
let myMap = new HashMap()
//Add the element by using put function
myMap.put('a', 1);
myMap.put('b', 2);
myMap.put('c', 3);
//here get the elment
console.log(myMap.get('a')); // Output: 1
console.log(myMap.get('b')); // Output: 2
console.log(myMap.get('c')); // Output: 3
//remove the elment  
myMap.remove('b')
console.log(myMap)

//9. Write a function that filters out even numbers from an array.
function evenFilter(arr){
  let result=[];
  for(let i=0; i<arr.length; i++){

    if(arr[i] % 2 !==0){
      result.push(arr[i])
    }
  }
  return result;
}
//Time Complexity O(n)
//Space Complexity O(n)
console.log(evenFilter([1,4,2,3,2,5,6,7,7,3,4]))


//10. Write a function that converts a given string to title case (capitalizing the first letter of each word).
function toTitleCase(str){
  return str.split(' ').map( (words) => {
    return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
  }).join(' ');
}
//Time Complexity O(n)
//Space Complexity O(n)
console.log(toTitleCase("javaScript is awesome"))