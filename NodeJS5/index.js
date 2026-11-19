import http from 'http';
import fs from 'fs';
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

const server = http.createServer((req, res) => {
    try {
        // 1. Задание 2: Специальный маршрут для проверки логирования ошибок
        if (req.url === '/error') {
            throw new Error('Тестовая ошибка при обработке запроса');
        }

        // 2. Задание 1: Проверка заголовка Authorization
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('Unauthorized');
            return;
        }

        // 3. Задание 3: Обработка методов PUT и DELETE (для авторизованных запросов)
        if (req.method === 'PUT') {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('PUT-запрос обработан');
        } else if (req.method === 'DELETE') {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('DELETE-запрос обработан');
        } else if (req.method === 'GET') {
            // Ответ для GET-запроса с заголовком Authorization из Задания 1
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Authorization header received');
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Метод не поддерживается');
        }
    } catch (error) {
        // Задание 2: Записываем ошибку в errors.log и отдаем 500
        const logMessage = `[${new Date().toISOString()}] ${error.message}\n`;
        fs.appendFile('errors.log', logMessage, (fsErr) => {
            if (fsErr) {
                console.error('Не удалось записать ошибку в лог:', fsErr);
            }
        });

        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Сервер успешно запущен на http://localhost:${PORT}`);
});
