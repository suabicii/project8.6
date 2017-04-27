var a = prompt('Podaj a'),
	b = prompt('Podaj b'),
	value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania (a * a) + (2 * a * b) - (b * b) wynosi: ' + value);

if (value > 0){
	console.log('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
} else {
	console.log('Wynik równy 0');
};

