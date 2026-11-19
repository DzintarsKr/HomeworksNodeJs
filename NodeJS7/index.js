import express from 'express';
import 'dotenv/config';
import sequelize from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3333;

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Подключение к базе данных MySQL успешно установлено.');
        console.log(`Сервер запущен на http://localhost:${PORT}`);
    } catch (error) {
        console.error('Ошибка подключения к базе данных:', error);
    }
});
