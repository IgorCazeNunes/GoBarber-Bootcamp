import express from 'express';

// src/server.ts
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack' });
});

app.listen(3333, () => {
    console.log('😎👌 Server started on port 3333!');
});
