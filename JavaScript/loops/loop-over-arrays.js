// looping over arrays
const groupName = ['Jessica', 'Busayo', 'Nicky', 'Olalekan'];

for (let i = 0; i < groupName.length; i++) {
    console.log (groupName[i]);
}


// nested loop over nested arrays
const studentName = [
    ['Selena', 'Urban', 'Doja'],
    ['Michael', 'Olawale', 'Victory'],
    ['Aisha', 'Anthony', 'Mary June'],
    ['Jessica', 'Busayo', 'Nicky', 'Olalekan'],
]
for (let i = 0; i < studentName.length; i++){
    let bash = studentName[i];
    console.log (`bash # ${i + 1}`)
    for (let j = 0; j < bash.length; j++){
        console.log (bash[j])
    }
}
