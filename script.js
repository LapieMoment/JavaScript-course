//konstruktor
function User(name,age) {
	this.name = name
	this.age = age
	this.hello = function(){
		console.log(`Cześć ${this.name}`);
	}
}

//klasyczny obiekt
const user1 = {
	age: 21,
	name: 'Klaudia'
}
console.log(user1);

//Obiekt na bazie konstrutkora
const user2 = new User('Klaudia',21)
const user3 = new User('Malina',21)
console.log(user2);

user3.hello()