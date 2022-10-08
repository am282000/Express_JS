const express = require("express");
const router = express.Router();

router.use(logger);
router.get("/", (req, res) => {
  res.json({ myName: "Users List" });
  console.log(req.query.name);
});
router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Erorrrrr");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    req.params.id;
    res.send(`Hi my id is ${req.params.id}`);
  })

  .put((req, res) => {
    res.send(`PUT my id is ${req.params.id}`);
  })

  .delete((req, res) => {
    res.send(`DELETE my id is ${req.params.id}`);
  });

// router.param("id", (req, res, next, id) => {
//   console.log("ID is", id);
//   next();
// });

const users = [{ name: "Sally" }, { name: "Maddy", age: 72 }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  console.log(req.user);
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
module.exports = router;
