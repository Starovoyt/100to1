const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const SettingsRoutes = require('./routes/api/settings');
const RoundsRoutes = require('./routes/api/rounds');
const AnswersRoutes = require('./routes/api/answers');

const settingsApi = require('./methods/settings')
const answersApi = require('./methods/answers')

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const {Server} = require("socket.io");
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
app.use('/api/rounds', RoundsRoutes)
app.use('/api/answers', AnswersRoutes)

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

io.on('connection', (socket) => {
    socket.on('PLAYING_FIELD_LOADED', async () => {
        await socket.join('123');
    });

    socket.on('ADMIN_PANEL_LOADED', async () => {
        await socket.join('456');
    });

    socket.on('DECREMENT_ROUND', async () => {
        const settings = await settingsApi.decrementRound();
        emitSocketEvent('SETTINGS_UPDATED', settings)
    });

    socket.on('INCREMENT_ROUND', async () => {
        const settings = await settingsApi.incrementRound();
        emitSocketEvent('SETTINGS_UPDATED', settings)
    });

    socket.on('OPEN_ANSWER', async (id) => {
        const answers = await answersApi.openAnswer(id);
        emitSocketEvent('ANSWERS_UPDATED', answers)
    });

    socket.on('CLOSE_ANSWER', async (id) => {
        const answers = await answersApi.closeAnswer(id);
        emitSocketEvent('ANSWERS_UPDATED', answers)
    });

    function emitSocketEvent(event, data) {
        socket.emit(event, data);
        socket.to('123').emit(event, data);
        socket.to('456').emit(event, data);
    }
});

server.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});

