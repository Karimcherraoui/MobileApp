import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware for JSON parsing

// MongoDB connection
mongoose.connect("mongodb+srv://karim:Console.123@cluster0.xw9jxeq.mongodb.net/MobileApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});