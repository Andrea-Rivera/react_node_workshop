/*----------- Prerequisite Code -----------*/
const express = require("express");

const app = express();
//app.use(express.json);

// Add default route with message "Hello Express Basic Rounting!.."
app.get("/", function (req, res) {
  res.send("Hello Express Basic Rounting!..");
});

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
/*------- End of Prerequisite Code -------*/

/*----------- Day 1 Exercise Code -----------*/

// Add a Get method - /api/hello, with message "Hello From Express Get Request"
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express Get Request" });
});
// Add a Post method - /api/worldpost, with message "I received the POST request, which is: "
app.post("/api/worldpost", (req, res) => {
  console.log(req.body);
  res.send(`I received the POST request, which is ${req.body.post}`);
});

/*------- End of Day 1 Exercise Code -------*/
