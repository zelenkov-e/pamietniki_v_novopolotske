"use strict";

var express = require("express");
var bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var app = express();

app.use(express.static("."));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;
  var content = `
      <h2>У вас новое сообщение с сайта granit_polotsk.by</h2>
          <h3>
            получено сообщение
          </h3>
          <p>клиент: ${name}</p> 
          <p>почта: ${email}</p> 
          <p>телефон: ${phone}</p>
          <p>сообщение: ${message}</p>
        `;
  var response = `
    <h2>У вас новое сообщение с сайта granit_polotsk.by</h2>
      <h3>
        Сообщение доставлено
      </h3>
      <p>
        В ближайшее время наш консультант с Вами свяжется. Если у Вас есть вопросы,
          Вы можете набрать на номер телефона указанный на сайте. 
      </p>
      `;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zelenkovzhenya",
      pass: "ZelenkoV20101986",
    },
  });

  let mailOptions = {
    to: "zelenkovzhenya@gmail.com",
    subject: "Письмо с сайта",
    html: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  let mailAnswerOptions = {
    from: "zelenkovzhenya@gmail.com",
    to: email,
    subject: "Письмо с сайта Пямятники",
    html: response,
  };

  transporter.sendMail(mailAnswerOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(5000);
