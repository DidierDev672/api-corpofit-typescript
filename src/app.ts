import express from 'express';
import personRoutes from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

//? Middleware para manejar JSON en el cuerpo de la solicitud
app.use(express.json());

//? Usa las rutas de personas
app.use('/api', personRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});