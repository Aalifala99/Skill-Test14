function alternateCase(str) {
  let letters = str.split('')
   return letters.map(letter =>
    (letter === letter.toUpperCase()) ? 
    letter.toLowerCase() : letter.toUpperCase()
    ).join('')
}
let a = alternateCase('abc')
let b = alternateCase('ABC')
let c = alternateCase('Hello World')

console.log(a)
console.log(b)
console.log(c)

/*
Alternate each case of each of string given 

alternateCase("abc")            => "ABC"
alternateCase("ABC")            => "abc"
alternateCase("Hello World")    => "hELLO wORLD"
*/