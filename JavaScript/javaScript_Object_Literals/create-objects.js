// creating a variable "fullName" that point to restaurent
const restaurant = {
    name: 'Yellow Chillis',
    address: `${Math.floor(Math.random() * 100) + 1} Joel Ogunnike`,
    city: 'Ikeja',
    state: 'Lagos',
}
undefined
address = restaurant.address; 
// '90 Johnson Ave'
city = restaurant.city;
// 'Brooklyn'
state = restaurant.state;
// 'NY'
zipcode = restaurant.zipcode;
// '11206'
let fullAddress = `${address}, ${city}, ${state}, ${zipcode}`;
// undefined
fullAddress
// '90 Johnson Ave, Brooklyn, NY, 11206'
