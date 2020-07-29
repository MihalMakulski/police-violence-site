const data = require('./data.json');

const dataWithId = data.map((record, idx) => ({...record, ID: idx}));

require('fs').writeFile('killings.json', JSON.stringify(dataWithId), () => console.log('done'));