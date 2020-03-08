var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
  }
});

sendEmail = () => {
    var mailOptions = {
      from: `${document.querySelector('#contact-email').value}`,
      to: '',
      subject: `Sent by ${document.querySelector('#contact-name').value} From wiserstorage.com!`,
      text: `${document.querySelector('#contact-message').value}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
}