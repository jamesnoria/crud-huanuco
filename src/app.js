import express from 'express';
import personaRoutes from './routes/personsRoutes.js';
import userRoutes from './routes/usersRoutes.js';
import morgan from 'morgan';
import { sequelize } from './config/dataBase.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

// rutas de personas
app.use('/persona', personaRoutes);

// rutas de usuarios
app.use('/usuario', userRoutes);

export const connection = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connection();
