import express from 'express';
import { User } from '../models/User';


const router = express.Router();

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
