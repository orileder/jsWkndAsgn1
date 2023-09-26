// ex1.1
// function booleanConvert(bool) {
//     if (bool === true) {
//         return "Yes";
//     } else if (bool === false) {
//         return "No";
//     }
// }
// console.log(booleanConvert(true)); 
// console.log(booleanConvert(false)); 


// ex.2.1
// function sumSmallest(numbers) {
// const sorted = numbers.sort((a,b) => a - b)
// console.log(sorted[0]+sorted[1]);
// }
// sumSmallest([3,5,89,1,9,2,4])


// ex.2.3
// function nextSquare(number) {
//     const nextSquared = (((Math.sqrt(number))+1)*((Math.sqrt(number))+1))
//     console.log(nextSquared);
// }
// nextSquare(64);


// ex.2.4
// function findUnique(arr) {
//     arr.sort((a, b) => a - b);
//     if (arr[0] !== arr[1]) {
//         return arr[0];
//     } else {
//         return arr[arr.length - 1];
//     }
// }
// console.log(findUnique ([8,8,8,8,3,8,8,8,8,8])
// );


// ex.2.5
// function sum(number) {
//     let sum = 0;
    
//     for (let i = 1; i <= number; i++) {
//         sum += i;
//     }
    
//     return sum;
// }
// console.log(sum(9));


// ex.2.6
// function century(year) {
//     return Math.ceil(year / 100);
// }
// console.log(century(1201));
// console.log(century(1200));
// console.log(century(999));


// ex.2.7
// function oparator(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         }
//     }
//     console.log(oparator('/',6,3));
//     console.log( oparator('*',7,3));

// ex.4.1
// function fib(n) {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
//     return (fib(n - 1) + fib(n - 2));
// }
// console.log(fib(10));
// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));


// ex.5.1
// function rmlttrs(string) {
// const str = string.slice(1,-1);
// return str
// }
// console.log(rmlttrs('abcdefg'));


// ex.5.2
// function rptstring(num, str) {
//     let result = '';
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }
// console.log(rptstring(5,'testing'));


// ex.5.3
// function toCamelCase(str) {
//     const words = str.split(/[-_]/);
//     for (let i = 1; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join('');
// }
// console.log(toCamelCase("the-stealth-warrior"));   
// console.log(toCamelCase("The_Stealth_Warrior"));   


// ex.5.4
// function toWeirdCase(str) {
//     const words = str.split(' ');
//     function weirdCaseWord(word) {
//         let result = '';
//         for (let i = 0; i < word.length; i++) {
//             if (i % 2 === 0) {
//                 result += word[i].toUpperCase();
//             } else {
//                 result += word[i].toLowerCase();
//             }
//         }
//         return result;
//     }
//     const weirdCasedWords = words.map(weirdCaseWord);
//     return weirdCasedWords.join(' ');
// }
// console.log(toWeirdCase("String"));           
// console.log(toWeirdCase("Weird string case")); 


// ex.5.5
// function abbrev(name) {
//     const words = name.split(' ');
//     const inits = words.map(word => word[0].toUpperCase());
//     return inits.join('.');
// }
// console.log(abbrev("ori leder"));   
// console.log(abbrev("jhon Lennon"));  


// ex.5.6
// function mask(str) {
//     if (str.length <= 4) {
//         return str;
//     }
//     const maskedPart = '#'.repeat(str.length - 4) + str.slice(-4);
//     return maskedPart;
// }
// console.log(mask("1234567890"));     
// console.log(mask("1"));               
// console.log(mask(""));                
// console.log(mask("abcdefg"));           
// console.log(mask("nanananananananananana Batman!")); 


// ex.5.7
// function findshrtwrd(str) {
//     return Math.min(...str.split(' ').map(word => word.length));
// }
// console.log(findshrtwrd('this is just a trial sentence'));
// console.log(findshrtwrd('this is trial sentence'));
// console.log(findshrtwrd('this trial sentence'));


// ex.6.1
// function accum(word) {
//     let result = '';

//     for (let i = 0; i < word.length; i++) {
//         const char = word[i].toLowerCase(); 
//         result += char.toUpperCase();
//         result += char.repeat(i);
//         if (i < word.length - 1) {
//             result += '-';
//         }
//     }
//     return result;
// }
// console.log(accum("abcd"));
// console.log(accum("BcDE")); 
// console.log(accum("eDtfYgUh")); 


// ex.6.2
// function countDups(input) {
//     input = input.toLowerCase();
//     const charList = {};
//     let duplicateCount = 0;
//     let dupmemo = []

//     for (const char of input) {
//         if (charList.hasOwnProperty(char)) {
//             charList[char]++;
//             if (charList[char] === 2) {
//                 duplicateCount++;
//                 dupmemo.push(char)
//             }
//         } else {
//             charList[char] = 1;
//         }
//     }
    
//     return [duplicateCount,dupmemo];
// }

// console.log(countDups("abcde")); 
// console.log(countDups("bbssddee")); 
// console.log(countDups("aBsCsVqA"));
// console.log(countDups("indivisibility")); 


// ex.6.4
// function isogram(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(isogram("asdfghjklzxcvbnm"));
// console.log(isogram("ashjka")); 
// console.log(isogram("aswertyuixA")); 



