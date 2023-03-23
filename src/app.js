import express from 'express';
import personaRoutes from './routes/Routes.js';
import morgan from 'morgan';
import {sequelize} from './config/dataBase.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/persona', personaRoutes);


export const connection = async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } 
};
connection();

