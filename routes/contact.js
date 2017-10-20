var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req,res,next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'abc@gmail.com',
			pass: '*******'
		}
	});

	var mailOptions = {
		from: 'Rachel Green <abc@gmail.com>',
		to: 'John Doe <doe@gmail.com>',
		subject: 'Basic Nodemailer Check',
		text: 'Submit form with Nodemailer with First Name: '+req.body.firstName+' , Last Name: '+req.body.lastName+' , Email: '+req.body.email+' , Message: '+req.body.message,
		html: `My First Nodemailer Mail Check 
				<ul>
					<li>First Name: `+req.body.firstName+`</li>
					<li>Last Name: `+req.body.lastName+`</li>
					<li>Email: `+req.body.email+`</li>
					<li>Message: `+req.body.message+`</li>
				</ul>`
	};

	transporter.sendMail(mailOptions,function(error,info) {
		if(error) {
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Email Sent '+info.response);
			res.redirect('/');
		}
	});

});

module.exports = router;
