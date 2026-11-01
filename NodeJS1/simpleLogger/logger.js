const fs = require('fs');

function logMessage(message) {
    fs.appendFile('log.txt', message + '\n', (err) => {
        if (err) {
            console.error('Ошибка записи лога:', err);
        } else {
            console.log('Лог успешно записан:', message);
        }
    });
}

module.exports = logMessage;