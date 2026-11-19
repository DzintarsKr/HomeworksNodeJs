const fs = require('fs');

// Записываем текст в файл info.txt
fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('Ошибка при записи в файл:', err);
        return;
    }
    console.log('Текст успешно записан в файл info.txt.');

    // Читаем содержимое файла после успешной записи
    fs.readFile('info.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }
        console.log('Содержимое файла:', data);
    });
});
