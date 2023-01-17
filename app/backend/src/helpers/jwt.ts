// const jwt = require('jsonwebtoken');
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

require('dotenv/config');

const secret: jwt.Secret = process.env.JWT_SECRET as string;

export const createToken = (data: JwtPayload) => { // string |
  const token = jwt.sign({ data }, secret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export const validateToken = (token: string) => {
  const tokenDecoded = jwt.decode(token);
  return tokenDecoded as jwt.JwtPayload;
};

export const tokenVerify = (token: string) => {
  try {
    const tokenDecoded = jwt.verify(token, secret);
    return tokenDecoded as jwt.JwtPayload;
  } catch (error) {
    return 'error';
  }
};

// export = { createToken, validateToken };
// export default jwt;
