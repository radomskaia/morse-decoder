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
    const morseArr = expr.match(/.{1,10}/g);
    let result = ''
    for (let letter of morseArr) {
        if (letter[0] === '*') {
            result += ' ';
            continue;
        }
        letter = +letter
        letter = String(letter)
        const letterArr = letter.match(/.{1,2}/g);
        let morseLetter = ''
        for (let char  of letterArr) {
            morseLetter += (char === '10') ? '.' : '-';
        }
        result += MORSE_TABLE[morseLetter];
    }
    return result;
}

module.exports = {
    decode
}