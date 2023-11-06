const nodemailer = require("nodemailer");

const { AUTH_EMAIL, AUTH_PASS } = process.env;

let transporter = nodemailer.createTransport({
  // host: "smtp-mail.outlook.com",
  service: "gmail",
  // service: "outlook",
  // port: 587,
  // secure: true,
  // secureConnection: true,
  // tls: {
  //   ciphers: "SSLv3",
  //   rejectUnauthorized: false,
  // },
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
});
//test transport
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for message");
    console.log(success);
  }
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;

// const nodemailer = require("nodemailer");

// const { AUTH_EMAIL, AUTH_PASS } = process.env;

// // Create a Nodemailer transporter
// let transporter = nodemailer.createTransport({
//   // host: "smtp-mail.outlook.com",
//   service: "gmail",
//   // secureConnection: true,
//   // port: 465,
//   // greetingTimeout: 1000 * 50,
//   auth: {
//     user: AUTH_EMAIL,
//     pass: AUTH_PASS,
//   },
// });

// // Verify the transporter to ensure it's ready for sending emails
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready for message");
//     console.log(success);
//   }
// });

// // Define the sendEmail function
// const sendEmail = async (mailOptions) => {
//   try {
//     // Send the email using the configured transporter and provided mailOptions
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully.");
//   } catch (error) {
//     // Handle any errors that might occur during email sending.
//     console.error("Email sending error:", error);
//   }
// };

// module.exports = sendEmail;
