import { Router } from 'express';
import login from './login';

export default () => {
  var router = Router();

  router.use('/login', login(router));
  return router;
}
