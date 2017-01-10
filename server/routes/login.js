var users = {
  Test: {
    count: 22
  },
  Cole: {
    count: 123
  }
}

export default router => {

  router.get('/', function(req, res) {
    res.send("login");
  })

  router.post('/', function(req, res) {
    console.log("cookies", req.cookies);
    console.log("Count", req.body);
    var user = users[req.body.username];
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
