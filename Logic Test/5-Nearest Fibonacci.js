function nearestFibonacci(num)
{
    // Base Case
    if (num == 0) {
        document.write(0);
        return;
    }
 
    // Initialize the first & second
    // terms of the Fibonacci series
    let first = 0, second = 1;
 

    let third = first + second;
 
    while (third <= num) {
 
       
        first = second;
 
        // Update the second
        second = third;
 
        // Update the third
        third = first + second;
    }
 
    let ans = (Math.abs(third - num)
               >= Math.abs(second - num))
                  ? second
                  : third;
 
    // Print the result
    console.log(ans);
}
 
// Driver Code
    let N = 19;
    nearestFibonacci(N);
/* 
Have the function to find nearest Fibonacci numbers, that the parameter is array.

**Example Input**: 

```jsx
arr = [15,1,3]
```

then your program expected to made **output = 2**

**Why Output is 2?**

Because by the above input example **[15,1,3]**, if we add up them it will **15+1+3 = 19**, 
and the nearest **fibonacci of 19 is 21**, 
so we need to **add 2 then it can be 21**. So, the correct answer is 2.
*/