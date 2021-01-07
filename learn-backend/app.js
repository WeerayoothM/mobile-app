const mailjet = require("node-mailjet").connect(
  "faa80dd8727fd9ddc6c178d82534a0a5",
  "5d1af72d5ba312fd32e922e4b659a849"
);
const { emailTemplate } = require("./util/emailTamplate");
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "ohm.weerayooth@rabbitstale.com",
        Name: "Weerayooth",
      },
      To: [
        {
          Email: "weerayooth12@gmail.com",
          Name: "Weerayooth",
        },
      ],
      Subject: "Pickle is waiting! Please verify your account",
      TextPart: "My first Mailjet email",
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      //   HTMLPart: emailTemplate({ confirmURL: "https://www.mailjet.com/" }),
      CustomID: "AppGettingStartedTest",
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
