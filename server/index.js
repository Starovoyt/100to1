const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    setInterval(() => {
        socket.emit('newMessage', {
            text: 'Hello',
        });
    }, 2000)
});

server.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
