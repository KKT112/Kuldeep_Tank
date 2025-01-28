let str1 = "hello";
let str2 = "world";
//m-1

//console.log(str1+" "+str2);

//m-2:template literal
let fullname = `good morning ${str1} ${str2}`;
console.log(fullname);

//upper and lower
console.log(str1.toLowerCase());

//indexof
console.log(str1.indexOf("l"));

//include
console.log(str1.includes("h"));

let s1 = "good";
let s2 = "morning hii";

//string slice
console.log(s2.slice(1, 3));

//string split =>array convert
console.log(s2.split(" "));

//string replace
console.log(s2.replace("hii", "hello"));

//string character
console.log(s2.charAt(4));

//concate
console.log(s2.concat(s1));

//at method
console.log(s2.at(6));

//boolean check operation ;
console.log("*********");

console.log(s2.endsWith("l"));

//0 to 65535 utf code;

console.log(s2.charCodeAt(5));

console.log(s2.codePointAt(9));

//find search character and get the index
console.log(s2.search("hii"));

//padstart
let text = "pm";
console.log(text.padStart(2, "x"));

//padend

console.log(text.padEnd(3, "z"));

//lastindexof

let sb = "palindrome finded";
let op = sb.lastIndexOf("ed");
console.log(op);

//value off mathod
console.log(sb.valueOf());

//match operation => regular expression
let string = "hello,good by ,Go,god evening";
console.log(string.match(/go/g));

//string normalize
console.log(string.normalize("NFKD"));

//at and charat
let sc="not you are eligibal"
console.log(sc.charAt(1));

//substring
console.log(sc.substring(2,6));
 
//repeat
console.log(sc.repeat(4));


//

