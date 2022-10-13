const reverseWord = string => {
  string = string.split("").reverse().join("")
  console.log(string)
}
str = "I am A Great human"

reverseWord(str)
/*
"I am A Great human"
into
"I ma A Taerg namuh"

note: observe the Capital word behavior. Capital only when in the first letter
*/