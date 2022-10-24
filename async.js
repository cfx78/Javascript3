// Promises

function orderSubmit() {
	new Promise((resolve, reject) => {
		let orderCompleted = false;

		if (orderCompleted) {
			resolve('Submitted!');
		} else {
			reject('Please try again');
		}
	})
		.then((result) => {
			console.log(result);
		})
		.catch((result) => {
			console.log(result);
		});
}

function remainingTime() {
	new Promise((resolve, reject) => {
		let trackProgress = 0.53;

		if (trackProgress === 0) {
			resolve('Next track');
		} else {
			reject('Keep Playing');
		}
	})
		.then((response) => {
			console.log(response);
		})
		.catch((response) => {
			console.log(response);
		});
}

orderSubmit();
remainingTime();

// Async Await

async function getName() {
	try {
		let name = prompt('Please enter a name');
		await console.log('Hi ' + name);
	} catch (error) {
		console.log('Something went wrong');
	}
}

getName();
