let age = prompt('Enter number');
// using || 
if (age <= 10 || age >= 50) {
    console.log ('free');
}
else if (age <= 20) {
    console.log ('$15');
}
else if (age < 50) {
    console.log ('$25');
}
else {
    console.log ('Invalid age');
}
