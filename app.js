const express = require("express");
const ejs = require("ejs");
const lodash = require("lodash");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
let posts = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
//for the home route

app.get("/", (req, res) => {
  res.render("home", { firstHomeContent: homeStartingContent, Posts: posts });
});
app.post("/", (req, res) => {
  console.log(req.body.home);
});

//for the about page
app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

///for the contact us page
app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

//for hidden compose Page
app.get("/compose", (req, res) => {
  res.render("compose");
});
app.post("/compose", (req, res) => {
  let post = { Title: "", Compose: "" };
  let title = req.body.userTitle;
  let compose = req.body.compose;
  post.Title = title;
  post.Compose = compose;
  posts.push(post);

  res.redirect("/");
});
// reroute
app.get("/posts/:postsid", (req, res) => {
  let posteRoute = lodash.lowerCase(req.params.postsid);
  posts.map((value) => {
    if (posteRoute == value.Title) {
      res.render("post", { postTitle: value.Title, postBody: value.Compose });
      console.log("suceesful");
    } else {
      console.log("tryagian");
    }
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});

//loriemLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Vitae justo eget magna fermentum iaculis eu non. Egestas purus viverra accumsan in. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Convallis posuere morbi leo urna molestie at elementum eu. Integer enim neque volutpat ac tincidunt vitae. Pretium quam vulputate dignissim suspendisse. Diam donec adipiscing tristique risus nec feugiat in. Odio pellentesque diam volutpat commodo. Ac ut consequat semper viverra nam libero justo laoreet. Accumsan sit amet nulla facil
