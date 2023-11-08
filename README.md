This project covers all the basics of node auth system including:

- User Login & Signup
- Requests Authorization(JWT)
- One-Time Pin System(OTP)
- Email Verification(OTP)
- Password Reset(OTP)

And you can use this auth systen for any frontend project.

To get started with the auth for this project
npm install express dotenv mongoose jsonwebtoken bcrypt nodemailer cors nodemon

You have to create an .env file and input the values
MONGODB_URI=
PORT=5000
TOKEN_KEY=go crazy wuth your keyboard
TOKEN_EXPIRY=365d
AUTH_EMAIL=
AUTH_PASS=

##

POST http://localhost:5000/api/v1/user/signup
{
"name" :"User full name",
"email": "User's email address",
"password": "your prefered password"
}

##

POST http://localhost:5000/api/v1/user
{
"email" : "User's email address",
"password" : "your prefered password"
}

##

GET request http://localhost:5000/api/v1/user/private_data?token=your token received
using the query params

##

POST http://localhost:5000/api/v1/otp
{
"email": "The user's email addresss",
"subject": "Email Verfication",
"message": "verify your email with the code below",
"duration": 1
}

##

POST request http://localhost:5000/api/v1/otp/verify
{
"email": "The user's email addresss",
"otp": "otp sent to your email"
}

##

Post request
http://localhost:5000/api/v1/email_verification
{
"email": "User's email address"
}

##

POST request
http://localhost:5000/api/v1/email_verification/verify

{
"email": "User's email address",
"otp": "check your mail for code"
}

##

POST request
http://localhost:5000/api/v1/forgot_password

{
"email":"User's email address"
}

##

This is will reset your password and change your old password to the new which was inputed.

POST request
http://localhost:5000/api/v1/forgot_password/reset

{
"email" : "User's email address",
"otp" : "check your email for otp",
"newPassword": "put your new password"
}
