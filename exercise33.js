
//Ask the user to enter a word to add to an array. Add the user input into the array. If the user enters a 'q', stop asking them to enter a word.
var ary=["tim hawkins","roler coster","beavis and butthead","pipe dreams","beasty boys"];

do {
    var input=(prompt("enter a number. enter q to quit"));
    ary.push(input)
console.log(ary)
} while(input!=="q")







