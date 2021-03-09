const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const { USER, PASSWORD, SENDER } = require('./config/keys');

const PORT = process.env.PORT || 8080;

app.use(express.json());

const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	requireTLS: true,
	auth: {
		user: USER,
		pass: PASSWORD,
	},
});

// handle the request made from the client-side
app.post('/send', (req, res) => {
	const { name, email, message } = req.body;

	transporter
		.sendMail({
			from: `${SENDER} 🐶`,
			to: email,
			date: new Date('2000-01-01 00:00:00'),
			subject: 'Sending Fun 🌟',
			html: `<b style='color:red;'>Hello from Mini :)</b><br /><p >Your Name: </p><p style='color:darkblue'> ${name}</p><br /><p>Your Message:</p><p style='color:darkblue;'>${message}</p>`,
		})
		.then((resp) => {
			res.json({ resp });
		})
		.catch((err) => {
			console.log(err);
		});
});

// serve PORT running here
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
