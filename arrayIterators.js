// ForEach

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(function (number) {
	console.log(number);
});

// IndexOF

let artists = ['Tyler', 'Donald', 'Dylan', 'Frank', 'Scott', 'Dylan'];
console.log(artists.indexOf('Tyler'));
console.log(artists.indexOf('Dylan', 3));
console.log(artists.indexOf('Sam'));

// Find
let albums = [
	{ title: 'Love Below', rating: 10 },
	{ title: 'Two', rating: 9 },
	{ title: 'Because the Internet', rating: 9.5 },
	{ title: 'IGOR', rating: 9.9 },
];
let almostPerfect = albums.find(function (album) {
	return album.rating === 9.9;
});
console.log(almostPerfect);

// Map

let titles = albums.map(function (album) {
	return album.title;
});
console.log(titles);

//Filter

let classics = albums.filter(function (album) {
	return album.rating >= 9.5;
});
console.log(classics);

//Reduce

let totalScore = albums.reduce(function (score, album) {
	return album.rating + score;
}, 0);

console.log(totalScore);

//Some

let subPar = albums.some(function (album) {
	albums.rating <= 8;
});

console.log(subPar);
