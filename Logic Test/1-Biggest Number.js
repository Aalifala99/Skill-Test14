
     
    // Function to print the maximum number
    function printMaxNum(num)
    {
        // hashed array to store count of digits
        let count = new Array(10);
        for(let i=0;i<count.length;i++)
        {
            count[i]=0;
        }
         
        // Converting given number to string
        let str = num.toString();
           
        // Updating the count array
        for(let i=0; i < str.length; i++)
            count[str[i]-'0']++;
           
        // result is to store the final number
        let result = 0, multiplier = 1;
           
        // Traversing the count array
        // to calculate the maximum number
        for (let i = 0; i <= 9; i++)
        {
            while (count[i] > 0)
            {
                result = result + (i * multiplier);
                count[i]--;
                multiplier = multiplier * 10;
            }
        }
        
        // return the result
        return result;
    }
     
    // Driver program to test above function
    let a = 123;
    let b = 231;
    let c = 321;
    let d = -1;
    let e = 0;
    let f = 99;
    let g = 1000;
    console.log(printMaxNum(a));
    console.log(printMaxNum(b));
    console.log(printMaxNum(c));
    console.log(printMaxNum(d));
    console.log(printMaxNum(e));
    console.log(printMaxNum(f));
    console.log(printMaxNum(g));


/*
Description:
Create a function that takes one positive three digit integer 
and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.


Returm null if the argument is invalid.

maxRedigit(123) --> 321
maxRedigit(231) --> 321
maxRedigit(321) --> 321

maxRedigit(-1)  --> null 
maxRedigit(0)   --> null
maxRedigit(99)  --> null
maxRedigit(1000) --> null 
*/