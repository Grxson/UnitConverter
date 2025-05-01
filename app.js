import express from "express"
import path from 'path'
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from "url"

import lengthRoutes from './routes/length.routes.js';
import weightRoutes from './routes/weight.routes.js';
import temperatureRoutes from './routes/temperature.routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/length', lengthRoutes);
app.use('/weight', weightRoutes);
app.use('/temperature', temperatureRoutes);

// Redirección base
app.get('/', (req, res) => {
    res.redirect('/length');
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});