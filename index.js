const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, urlencoded: true }));

app.post("/contact", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amanwadhwaniya159@gmail.com",
      pass: "blyebguajtlojsph",
    },
  });

  var mailOptions = {
    from: "amanwadhwaniya159@gmail.com",
    to: "amanwadhwaniya159@gmail.com",
    subject: "Contact Details from portfolio",
    text: `Name: ${req.body.name}
    Email: ${req.body.email}
    Phone No: ${req.body.phoneno} 
    Message: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.send("").statusCode(401);
    } else {
      res.send("").statusCode(200);
    }
  });
});

app.use(express.static("website"));

app.get("/resume", (req, res) => {

  //will send pdf here
  res.sendFile(__dirname + "/website/resume/bg-image.jpg");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/website/index.html");
});

app.listen(port, "127.0.0.1", () => {
  console.log("Running");
});
