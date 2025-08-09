// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export const protectRoute = (req, res, next) => {
  try {
    // 1. Get token from header or cookies
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
console.log(process.env.JWT_SECRET);
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user info to request
    req.user = decoded;

    // 4. Continue
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
