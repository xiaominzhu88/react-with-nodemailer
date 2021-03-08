import React from 'react';
import styles from './RequestForm.module.scss';
import { Input } from 'reakit/Input';
import { Button } from 'reakit/Button';

const RequestForm = ({ email, message, setEmail, setMessage }) => {
	const submit = () => {
		fetch('/send', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				message,
			}),
		})
			.then((res) => console.log(res))

			.then(() => {
				setEmail('');
				setMessage('');
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className={styles.form}>
			<div className={styles.mail}>
				<label className={styles.label}>Your Email</label>
				<Input
					type="text"
					className={styles.input}
					placeholder="enter your mail"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</div>
			<div className={styles.message}>
				<label className={styles.label} name="message">
					Your Message
				</label>
				<Input
					className={styles.textarea}
					placeholder="What's on your mind?"
					type="text"
					value={message}
					as="textarea"
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>
			<Button onClick={submit} className={styles.submitButton}>
				Send
			</Button>
		</div>
	);
};

export default RequestForm;
