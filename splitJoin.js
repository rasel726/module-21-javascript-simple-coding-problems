const lyrics = 'Tumi bonshu kala pakhi. ami jeno ki. bosonto kale tomay bolte parini. sada sada kala kala.';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);  

const partial = lyrics.slice(5, 8);

// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
    'Tumi bonshu kala pakhi',
    'Ami jeno ki',
    'Bosonto kale tomay bolte parini',
    'Sada sada kala kala',
    'Rong jomeche sada kala'
]

const newSong = lines.join('. ');
console.log(newSong);