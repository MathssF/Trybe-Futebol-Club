// import LoginInt from 'src/interfaces/LoginInt';

import * as bcrypt from 'bcryptjs';
import { createToken, validateToken } from '../helpers/jwt'; // { createToken }
import UserInt from '../interfaces/UserInt';
import UserMod from '../database/models/UserMod';

// const bcrypt = require('bcryptjs');

export default class LoginSer {
  static async UserLogin(email: string, password: string): Promise<UserInt | string> {
    const findUser = await UserMod.findOne({ where: { email } });
    if (!findUser) return 'Incorrect';
    const checkPass = await bcrypt.compare(password, findUser.password);
    if (!checkPass) return 'Incorrect';
    const data = {
      email: findUser.email,
      id: findUser.id,
      role: findUser.role,
    };
    const token = createToken(data);
    return token;
  }

  static async RoleValidade(authorization: string): Promise<string> {
    const decoded = validateToken(authorization);
    const { role } = decoded.data;
    // const findRole = await UserMod.findOne({ where: { email } });
    return role;
  }
}
