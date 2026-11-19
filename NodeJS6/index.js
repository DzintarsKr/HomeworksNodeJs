import express from 'express';
import 'dotenv/config';
import db from './db.js';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

// Маршруты из Задания 3
app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

app.post('/', (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: 'Ошибка: данные не были отправлены' });
    }
    res.status(200).json({ message: 'Данные успешно получены!', receivedData: data });
});

// Маршрут GET /products — получение всех товаров из БД
app.get('/products', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
        res.status(500).json({ error: 'Ошибка сервера при получении списка продуктов' });
    }
});

// Маршрут POST /products — добавление нового товара в БД
app.post('/products', async (req, res) => {
    try {
        const { name, price } = req.body;

        // Проверяем наличие обязательных полей
        if (!name || price === undefined) {
            return res.status(400).json({
                error: 'Поля "name" и "price" обязательны для заполнения'
            });
        }

        const [result] = await db.query(
            'INSERT INTO products (name, price) VALUES (?, ?)',
            [name, price]
        );

        res.status(201).json({
            message: 'Продукт успешно добавлен!',
            product: {
                id: result.insertId,
                name,
                price
            }
        });
    } catch (error) {
        console.error('Ошибка при добавлении продукта:', error);
        res.status(500).json({ error: 'Ошибка сервера при добавлении продукта' });
    }
});

// Обработка несуществующих маршрутов (404)
app.use((req, res) => {
    res.status(404).json({ error: 'Маршрут не найден (404)' });
});

// Глобальный обработчик ошибок (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, () => {
    console.log(`Express-сервер успешно запущен на http://localhost:${PORT}`);
});
