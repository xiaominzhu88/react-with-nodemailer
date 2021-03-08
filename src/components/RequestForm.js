import React from 'react';
import styles from './RequestForm.module.scss';
import { Input } from 'reakit/Input';
import { Button } from 'reakit/Button';

const RequestForm = ({ submit, email, message, setEmail, setMessage }) => {
	return (
		<form className={styles.form} onSubmit={submit}>
			<div className={styles.mail}>
				<label className={styles.label} name="mail">
					Your Email
				</label>
				<Input
					className={styles.input}
					name="mail"
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
					name="message"
					placeholder="What's on your mind?"
					as="textarea"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>
			<Button className={styles.submitButton} type="submit" value="submit">
				Send
			</Button>
		</form>
	);
};

export default RequestForm;
