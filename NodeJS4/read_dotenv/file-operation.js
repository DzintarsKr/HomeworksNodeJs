const fs = require('fs');
require('dotenv').config();

// Получаем имя файла из переменной окружения
const fileName = process.env.FILENAME;
const content = 'Привет! Этот текст записан в файл через переменную окружения.';

// Записываем текст в файл
fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Ошибка при записи файла:', err);
        return;
    }
    console.log(`Файл "${fileName}" успешно создан и записан.`);

    // Читаем содержимое созданного файла
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }
        console.log('Содержимое файла:', data);
    });
});
