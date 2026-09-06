const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const { initDB } = require('./db');

const contactRouter = require('./routes/contact');
const projectsRouter = require('./routes/projects');
const achievementsRouter = require('./routes/achievements');
const activitiesRouter = require('./routes/activities');

const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);
const HOST = '0.0.0.0';

// Configure CORS
const defaultOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const rawFrontendUrls = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : [];
const allowedOrigins = [
  ...defaultOrigins,
  ...rawFrontendUrls,
]
  .map((url) => url.trim().replace(/^["']|["']$/g, '').replace(/\/+$/, ''))
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, uptime/health probes, same-origin)
    if (!origin) {
      return callback(null, true);
    }

    const normalizedOrigin = origin.trim().replace(/\/+$/, '').toLowerCase();
    const isAllowed = allowedOrigins.some(
      (allowed) => allowed.toLowerCase() === normalizedOrigin
    );

    if (isAllowed) {
      return callback(null, true);
    }

    // Reject disallowed origin gracefully without throwing an unhandled Error
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/achievements', achievementsRouter);
app.use('/api/activities', activitiesRouter);

// Health check endpoint (Railway & uptime probes)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-backend',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint status
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'portfolio-backend',
    message: 'Portfolio backend API is running',
  });
});

// Start server and initialize MySQL
async function startServer() {
  try {
    await initDB();
  } catch (err) {
    console.warn('[Server] MySQL initialization warning:', err.message);
  }

  app.listen(PORT, HOST, () => {
    console.log(`[Server] Portfolio backend listening on http://${HOST}:${PORT}`);
  });
}

startServer();

