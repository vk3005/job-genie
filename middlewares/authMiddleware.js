import JWT from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return next('Authorization failed');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);

    // Attach userId to req.user instead of req.body
    req.user = { userId: payload.userId };

    next();
  } catch (error) {
    next('Authorization failed');
  }
};

export default userAuth;
