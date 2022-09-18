const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const SettingsRoutes = require('./routes/api/settings');

const {getSettingsList} = require('./methods/settings/getSettingsList')

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

mongoose
    .connect('mongodb://localhost:27017/100to1', {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err));

app.use('/api/settings', SettingsRoutes)

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    setInterval(async () => {
        const settings = await getSettingsList();

        socket.emit('newMessage', settings);
    }, 2000)
});

server.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
