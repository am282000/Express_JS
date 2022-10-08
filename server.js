const express = require("express");
const app = express();
app.set("view engine", "ejs");

// app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.render("index", { text: "world" });
// });
// app.use(logger);

// app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const useRouter = require("./routes/user");
app.use("/users", useRouter);

// const postRouter = require("./routes/user");
// app.use("/posts", postRouter);

app.listen(3000);
