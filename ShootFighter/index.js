"use strict";

// подключение фреймворка
const express = require("express");
const app = express();

// разрешаем обращаться к файлам из папки static
app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res) {
    res.sendfile("static/index.html");
});

// задаём порт
const port = 5000;
// запускаем сервер для раздачи статических файлов
app.listen(port);
// выводим сообщение об успешном запуске
console.log("Server works on port: " + port);
