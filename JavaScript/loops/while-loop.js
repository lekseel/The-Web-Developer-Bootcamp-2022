let i = 1;
while (i <= 10) {
    console.log (i);
    i++;
}


//while loop for password or secret answer

const secretAnswer = 'motivated';

let input = prompt ('Enter your secret answer');
while (input !== secretAnswer) {
    input = prompt ('Invalid answer, try again');
}