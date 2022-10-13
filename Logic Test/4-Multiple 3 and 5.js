let multiplesOf = (number) => {
    let sum = 0;

    let i; 
    for (i = 1; 1<number; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            sum = sum + i 
        }
    }
    return sum;
}

multiplesOf(1000)
/*
Create solution function that accept 1 parameter that be will multiple number 3 and 5 
while each result of that multiplication is still lower than parameter inputed

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
*/

