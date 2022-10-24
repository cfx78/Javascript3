// Promises

const orderSubmit = new Promise((resolve, reject) => {
	let orderCompleted = true;

	if (orderCompleted) {
		resolve('Submitted!');
	} else {
		reject('Please try again');
	}
});

orderSubmit
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});

let remainingTime = new Promise((resolve, reject) => {
	let trackProgress = 0.53;

	if (trackProgress === 0) {
		resolve('Next track');
	} else {
		reject('Keep Playing');
	}
});

remainingTime
	.then((response) => {
		console.log(response);
	})
	.catch((response) => {
		console.log(response);
	});
4;
