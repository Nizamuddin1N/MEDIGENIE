const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const conditionRoutes = require('./routes/conditionRoutes');
const authRoutes = require('./routes/authRoutes');


dotenv.config();

const app = express();

// Enhanced JSON parsing middleware
app.use(express.json({
    verify: (req, res, buf) => {
        try {
            JSON.parse(buf.toString());
        } catch (e) {
            res.status(400).json({ error: "Invalid JSON format" });
            throw new Error("Invalid JSON");
        }
    },
    limit: '10mb' // Increase payload size if needed
}));

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/conditions', conditionRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: "Invalid JSON format" });
    }
    next();
});

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));