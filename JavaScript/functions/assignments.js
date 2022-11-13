/*Define a function called rant which accepts a string
argument called message. The function should 
print out an uppercased version of message 3 
times (with 3 separate calls to console.log).
For example, rant("I hate beets")*/

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