import * as express from 'express';

import LoginCon from '../controller/LoginCon';

const Login = express.Router();

Login.post('/', LoginCon.LoginPost);
Login.get('/validate', LoginCon.LoginRole);

export default Login;
