const EventEmitter = require('events');

const chat = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit('message', username, message);
}

chat.on('message', (username, message) => {
    console.log(`${username}: ${message}`);
});

sendMessage('Алексей', 'Привет всем!', chat);
sendMessage('Мария', 'Привет, Алексей!', chat);
sendMessage('Иван', 'Как у вас дела?', chat);
sendMessage('Алексей', 'Всё отлично!', chat);
sendMessage('Мария', 'У меня тоже всё хорошо!', chat);