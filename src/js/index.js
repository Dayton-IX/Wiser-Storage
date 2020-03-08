var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'daytonmaximus@gmail.com',
    pass: 'pyth_JS-2.12'
  }
});

sendEmail = () => {
    var mailOptions = {
      from: `${document.querySelector('#contact-email').value}`,
      to: 'daytonmaximus@gmail.com',
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