// task 1
// function power(a, b) {
//     let result = 1;
//     for(let i=0; i<b; i++) {
//         result *= a;
//     }
//     // return result;
//     document.write(result);
// };
// power(2, 3);

// task2
// function leapYear(year) {
//     if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
//         document.write(year, " is a leap year")
//     }else{
//         document.write(year, " is not a leap year")
//     }
// };
// leapYear(2016);

// task3
// function side(a, b, c) {
//     let r = (a + b + c)/2;
//     return r;
// }

// function areaOfTriangle(a, b, c) {
//     let S = side(a, b, c);
//     let result = Math.sqrt(S* (S-a)*(S-b)*(S-c));
//     return result;
// };

// document.write(areaOfTriangle(5, 6, 7));

// task4
// function average(a, b, c){
//     return (a+b+c)/3;

// }
// function percentage(a, b, c) {
//     let om = a+b+c;
//     let tm = 300
//     return (om*100)/tm;
// }
// function result(a, b, c) {
//     let avg = average(a, b, c);
//     let per = percentage(a, b, c);
//     document.write("The average of marks is ", avg , "<br>");
//     document.write("The percentage of marks is ", per , "%");
// }
// result(70, 65, 80);

// task5
// function indexOf (str, char) {
//     for (let i=0; i<str.length; i++) {
//         if(str[i] == char){
//             // return i;
//             document.write(i);
//         }
//     }
// };
// document.write(indexOf("azeem", "m"));
// indexOf("azeem", "m")

// task6

// function removeVowels(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] !== "a" &&
//       str[i] !== "e" &&
//       str[i] !== "i" &&
//       str[i] !== "o" &&
//       str[i] !== "u" &&
//       str[i] !== "A" &&
//       str[i] !== "E" &&
//       str[i] !== "I" &&
//       str[i] !== "O" &&
//       str[i] !== "U"
//     ) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// document.write(removeVowels("azeem"));

// task7

// function countVowelPairs(text) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
    
//     for (let i = 0; i < text.length - 1; i++) {
//         let pair = text[i] + text[i + 1];
        
        
//         if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
            
//             switch (pair.toLowerCase()) {
//                 case 'aa': case 'ae': case 'ai': case 'ao': case 'au':
//                 case 'ea': case 'ee': case 'ei': case 'eo': case 'eu':
//                 case 'ia': case 'ie': case 'ii': case 'io': case 'iu':
//                 case 'oa': case 'oe': case 'oi': case 'oo': case 'ou':
//                 case 'ua': case 'ue': case 'ui': case 'uo': case 'uu':
//                     count++;
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
    
//     return count;
// }

// const text = "Pleases read this application and give me gratuity";
// document.write((countVowelPairs(text))); 

// task8

// function meter(distance) {
//     return distance*1000;

// }
// function feet(distance) {
//     return distance*3280.83;

// }
// function inches(distance) {
//     return distance*39370.1 ;

// }
// function centimeter(distance) {
//     return distance*100000;

// }
// let distance = 100;
// document.write(meter(distance), "<br>");
// document.write(feet(distance), "<br>");
// document.write(inches(distance), "<br>");
// document.write(centimeter(distance));

// task9
// function calculateOvertimePay(hoursWorked) {
//     const overtimeRate = 12.00;
//     const regularHours = 40;
//     let overtimeHours = hoursWorked > regularHours ? hoursWorked - regularHours : 0;
//     return overtimeHours * overtimeRate;
// }


// let hoursWorked = 45;
// console.log("Overtime Pay: Rs. " + calculateOvertimePay(hoursWorked)); 

// task10
function calculateNotes(amount) {
    amount *= 100; 
    const notes100 = Math.floor(amount / 100);
    amount %= 100;
    const notes50 = Math.floor(amount / 50);
    amount %= 50;
    const notes10 = Math.floor(amount / 10);

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}


let amountToWithdraw = 3; 
let notes = calculateNotes(amountToWithdraw);
console.log("Notes of 100: " + notes.notes100);
console.log("Notes of 50: " + notes.notes50);
console.log("Notes of 10: " + notes.notes10);

