// Timing Events

function myTimeout() {
	console.log('my timeout');
}
let myTimeClear = setTimeout(myTimeout, 500);
console.log('This is ');

/*clearTimeout(myTimeClear);*/
let x = 0;
function myInterval() {
	console.log(++x);
}

let myCounter = setInterval(myInterval, 1000);

let myCounterClear = function timeClear() {
	clearInterval(myCounter);
};

setTimeout(myCounterClear, 10000);

// This

console.log(this);

let myUser = {
	age: 36,
	height: 5.11,
	weight: 180,
	displayAge: function () {
		console.log('My age is ' + this.age);
	},
	displayWeight: function () {
		console.log('My weight is ' + this.weight);
	},
	displayHeight: function () {
		console.log('My height is' + this.height);
	},
};
function displayInfo() {
	myUser.displayAge();
	myUser.displayHeight();
	myUser.displayWeight();
}

setTimeout(displayInfo, 11000);
