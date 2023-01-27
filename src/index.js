const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    let arr10 = [];
    let arrWords = [];

function morseDecoder(x) {

    if (x == "**********") {
        return " ";
    }

    else {

        return MORSE_TABLE[x.replaceAll('00', '').replaceAll('10','.').replaceAll('11','-')];
    }
}

    for (let i=0; i <expr.length; i=i+10) {
        arr10.push(arr.slice(i,i+10));   
    }
    
    arrWords = arr10.map(x => x.join(''));

    return arrWords.map(x => morseDecoder(x)).join("")

    
}

module.exports = {
    decode
}