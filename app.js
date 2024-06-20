const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Обработчик маршрута главной страницы
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Обработчик маршрута about
app.get('/about', function (req, res) {
    res.send('Это простое приложение на Express.js');
});

// Обработчик несуществующих маршрутов
app.use(function (req, res, next) {
    res.status(404).send('Страница не найдена');
});

app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});