import { Response, Request } from 'express';
import LoginSer from '../services/LoginSer';

export default class LoginCon {
  static async LoginPost(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const sendLogin = await LoginSer.UserLogin(email, password);
    if (sendLogin === 'Incorrect') {
      return res.status(401).json({
        message: 'Incorrect email or password',
      });
    }

    return res.status(200).json({ token: sendLogin });
  }

  static async LoginRole(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const findRole = await LoginSer.RoleValidade(token);
    return res.status(200).json({
      role: findRole,
    });
  }
}

// Ou faz com statico e import ou usa o constructor;
