import express from 'express';
import personaRoutes from './routes/Routes.js';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/persona', personaRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});