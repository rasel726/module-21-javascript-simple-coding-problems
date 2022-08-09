const lyrics = 'Tumi bonshu kala pakhi, ami jeno ki, bosonto kale tomay bolte parini, sada sada kala kala';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

/**
 * ----------------------
 *  INDEX OF
 * ----------------------
 */

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('can not find it');
}

/**
 * ----------------------
 *  startsWith
 * ----------------------
 */

console.log(lyrics.startsWith('Tumi'));


/**
 * ----------------------
 *  endsWith
 * ----------------------
 */

const fileName = 'mybiodata.pdf';
const otherFile = "mypic.png";

fileName.endsWith('.pdf');