const fs = require('fs');
console.log('leyendo archivo...')
const content = fs.readFileSync('./sample.txt', 'utf-8');
const cleanContent= content.replaceAll(',','')
let splitContent=cleanContent.split(' ') //rompe el string en cada espacio dando substrings.
let counter=0
splitContent.forEach(word => {
    if(word.toLowerCase()==="javascript"){
        counter++;
    }
});
console.log('Archivo leido, revisa el count.txt...')
fs.writeFileSync('count.txt', `The word "javascript" appears ${counter} times in the text`);

