const moment = require('moment');

// Получаем текущую дату и время
const now = moment();

// Форматируем и выводим в консоль
console.log('Формат DD-MM-YYYY:', now.format('DD-MM-YYYY'));
console.log('Формат MMM Do YY:', now.format('MMM Do YY'));
console.log('Формат dddd:', now.format('dddd'));
