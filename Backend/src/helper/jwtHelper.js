import jwt from 'jsonwebtoken';

const jwtHelper = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export default jwtHelper;