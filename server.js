require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/postRoute');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts',postRoutes);
app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('Successfully connected to MongoDB!');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

startServer();