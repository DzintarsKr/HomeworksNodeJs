import db from './db.js';

async function createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL
        )
    `;

    try {
        await db.query(query);
        console.log('Таблица "products" успешно создана в базе данных product_db.');
    } catch (error) {
        console.error('Ошибка при создании таблицы:', error);
    } finally {
        await db.end();
    }
}

createTable();
