require('dotenv').config(); // โหลดตัวแปรจาก .env ก่อนใครเพื่อน
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routers/routers')

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware สำหรับการ parse JSON body ใน request
app.use(express.json());

// เชื่อมต่อ MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Route ทดสอบเบื้องต้น
app.get('/', (req, res) => {
    res.send('To-Do List API is running');
});

app.use('/api/todos', todoRoutes)

// เริ่มต้น Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});