// Converting JSON to JavaScript

let shoeDataJson = `[
	{
		"Brand": "Nike",
		"Model": "AF1",
		"Color": "Black",
		"Size": 11,
		"Top": {
			"Low": true,
			"Mid": false,
			"High": false
		}
	},
	{
		"Brand": "Jordan",
		"Model": "Eleven",
		"Color": "Bred",
		"Size": 10.5,
		"Top": {
			"Low": false,
			"Mid": true,
			"High": false
		}
	},
	{
		"Brand": "Nike",
		"Model": "Foamposite",
		"Color": "Weatherman",
		"Size": 12.5,
		"Top": null
	}
]
`;

let shoeOrderScript = JSON.parse(shoeDataJson);

shoeOrderScript.forEach(function (shoe) {
	console.log(shoe.Model);
});
console.log(shoeOrderScript[1]);

// Converting JavaScript to JSON

let shoeDataScript = [
	{
		Brand: 'Nike',
		Model: 'AF1',
		Color: 'Black',
		Size: 11,
		Top: {
			Low: true,
			Mid: false,
			High: false,
		},
	},
	{
		Brand: 'Jordan',
		Model: 'Eleven',
		Color: 'Bred',
		Size: 10.5,
		Top: {
			Low: false,
			Mid: true,
			High: false,
		},
	},
	{
		Brand: 'Nike',
		Model: 'Foamposite',
		Color: 'Weatherman',
		Size: 12.5,
		Top: null,
	},
];
let shoeOrderJson = JSON.stringify(shoeDataScript);

console.log(shoeOrderJson);
