import { Router } from 'express';

export default () => {
  let router = Router();

  router.get('/test', function(req, res) {
    res.send("login");
  })

  router.post('/', function(req, res) {
    console.log("cookies", req.cookies);
    console.log("Count", req.body);
    var user = 123// user.getUser(req.body.username);
    if (user) {
      res.cookie("auth", "tokenX");
      res.send({
        success: true,
        result: user.count
      })
    } else {
      res.send({
        success: false,
        error: "user not found"
      })
    }
  });

  return router;
}
