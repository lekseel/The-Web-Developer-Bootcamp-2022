/*Define a function called rant which accepts a string
argument called message. The function should print out an uppercased version of message 3 
times (with 3 separate calls to console.log). For example, rant("I hate beets")*/

function rant(mesage) {
    for (let i = 1; i <= 3; i++) {
    console.log (mesage.toUpperCase());
    }
}
rant('i hate beets')
 

/*In some dice games like Craps, a roll  of two 1's is called "Snake Eyes". It's generally
not a good roll.  Please write a  function called isSnakeEyes, which accepts
two numbers as inputs, representing two dice. If the two numbers are both 1's, 
please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!*/

function isSnakeEyes(i, j) {
    if ( i === 1 && j === 1) {
        console.log ('Snake Eyes!');
    }
    else {
        console.log ('Not snake Eyes!');
    }
}
isSnakeEyes(1, 1)
isSnakeEyes(1, 2)


/*Write a simple function multiply which accepts two numerical arguments
and returns their product (multiply them together).
Make sure to return the value instead of printing it!

multiply(2,3) // 6
multiply(9,9) // 81
multiply(5,4) // 20*/

// function multiply(i, j) {
//     let myNum = i * j;
//     return myNum;
// }



/*Please write a function called lastElement which accepts a single 
array argument. The function should return the last element of 
the array (without removing the element).  If the array is empty, the function should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null*/

function lastElement([ijk]) {
    if (!ijk.length) {
    return null;
    }
    return ijk[ijk.length - 1];
}


/*Write a function called sumArray which accepts a single argument: an array of numbers.  It should return
the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101

Hints:
* You'll need a variable to keep track of the total.  It should start out as zero.
* Loop over the array and for each element, add it to the total variable.
* After you have added every number to total, return total.*/

function sumArray (ijk) {
    let total = 0;
    for (let i = 0; i < ijk.length; i++) {
        total += ijk[i];
    }
    return total;
}


/* Write a function called returnDay. this function takes in one parameter (a number from 1-7)
and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7,
the function should return null. In some countries Sunday is treated as the first day of the week, but 
for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.
When the function is called, plug the number into the array/object you've created to retrieve 
the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null */

function returnDay(num) {
    
    let days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let i = 1; i <= days.length; i++)
        if (num < 1 || num > 7) {
            return null;
        }
        else {
            return days[num - 1]
    }
}