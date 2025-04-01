import express from 'express';
import mongoose from 'mongoose';
import authRoute from './src/routes/auth.routes.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoute);

// Connect to Local MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/crud', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB connected locally'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
