const fs = require('fs');

// Создаем каталог myFolder
fs.mkdir('myFolder', (err) => {
    if (err) {
        console.error('Ошибка при создании каталога:', err);
        return;
    }
    console.log('Каталог myFolder успешно создан.');

    // Удаляем каталог myFolder после того, как он точно создался
    fs.rmdir('myFolder', (err) => {
        if (err) {
            console.error('Ошибка при удалении каталога:', err);
            return;
        }
        console.log('Каталог myFolder успешно удален.');
    });
});
