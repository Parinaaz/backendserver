var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'parinaaz.cobla@gmail.com',
    pass: '*******'
  }
});

var mailOptions = {
  from: 'parinaaz.cobla@gmail.com',
  to: 'specialyazad@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info)=>{
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});