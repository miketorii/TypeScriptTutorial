import * as fs from 'fs';

console.log('------start--------');

const filePath = 'data.json';

const data = fs.readFileSync(filePath, 'utf8');

console.log( data );
