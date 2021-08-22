const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let decodedText = '';

	for (let i = 0; i < expr.length; i += 10) {
		const letterBooleanEncoded = expr.slice(i, i + 10);
		let letterMorseCoded = '';

		if (letterBooleanEncoded == '**********') {
			decodedText += ' ';
			continue;
		}

		for (let j = 9; j > 0; j -= 2) {
			const morseSign = letterBooleanEncoded[j - 1] + letterBooleanEncoded[j];
			if (morseSign == '00') {
				break;
			} else if (morseSign == '10') {
				letterMorseCoded = `.${letterMorseCoded}`;
			} else if (morseSign == '11') {
				letterMorseCoded = `-${letterMorseCoded}`;
			}
		}

		decodedText += MORSE_TABLE[letterMorseCoded];
	}

	return decodedText;
}

module.exports = {
	decode
}