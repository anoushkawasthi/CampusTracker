require('dotenv').config();

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // your frontend Next.js app
  credentials: true,
}));

app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Hi! Welcome to Campus Tracker, Lessgooo!!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
