const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const { SENDGRID_API } = require('./config/keys');

const PORT = process.env.PORT || 8080;

app.use(express.json());

const transporter = nodemailer.createTransport(
	sendGridTransport({
		auth: {
			api_key: SENDGRID_API,
		},
	}),
);

// handle the request made from the client-side
app.post('/send', (req, res) => {
	const { email, message } = req.body;

	transporter
		.sendMail({
			to: email,
			from: 'xiaomin.zhu88@gmail.com',
			text: message,
			subject: 'Sending Fun 🌟',
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
