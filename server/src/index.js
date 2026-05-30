import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import apiRoutes from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

const corsOrigins =
  process.env.NODE_ENV === 'production'
    ? [CLIENT_URL, process.env.RENDER_EXTERNAL_URL].filter(Boolean)
    : [CLIENT_URL, 'http://localhost:5173'];

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { message: 'Too many messages. Please try again later.' },
});

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(
  cors({
    origin: corsOrigins.length ? corsOrigins : true,
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use('/api', limiter);
app.use('/assets', express.static(path.join(__dirname, '../../assets')));

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactLimiter);
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '../../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (_, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

app.use(errorHandler);

async function start() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
  try {
    await connectDB(uri);
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
}

start();
