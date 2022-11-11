// creating a variable "fullName" that point to restaurent and printout the address
const restaurant = {
    name: 'Yellow Chillis',
    address: `${Math.floor(Math.random() * 100) + 1} Joel Ogunnike`,
    city: 'Ikeja',
    state: 'Lagos',
}
address = restaurant.address;
city = restaurant.city;
state = restaurant.state;
zipcode = restaurant.zipcode;
let fullAddress = `${address}, ${city}, ${state}, ${zipcode}`;
