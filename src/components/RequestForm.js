import React from 'react';
import styles from './RequestForm.module.scss';
import { Input } from 'reakit/Input';
import { Button } from 'reakit/Button';
import { useForm } from 'react-hook-form';

const RequestForm = ({
	name,
	email,
	message,
	setName,
	setEmail,
	setMessage,
}) => {
	const { register, handleSubmit, errors } = useForm();
	const submit = () => {
		fetch('/send', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				message,
				name,
			}),
		})
			.then((res) => console.log(res))
			.then(() => {
				setEmail('');
				setMessage('');
				setName('');
			})
			.catch((err) => console.log(err));
	};

	return (
		<form className={styles.form}>
			<div className={styles.name}>
				<label className={styles.label}>Your Name</label>
				<Input
					type="text"
					className={styles.input}
					placeholder="enter your name"
					onChange={(e) => setName(e.target.value)}
					value={name}
					name="name"
					required
					ref={register({ required: true })}
				/>
				<span> {errors.name && 'Let me know your name ☘️'}</span>
			</div>
			<div className={styles.mail}>
				<label className={styles.label}>Your Email</label>
				<Input
					type="text"
					className={styles.input}
					placeholder="enter your mail"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					name="email"
					required
					ref={register({
						required: true,
						pattern: /^[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
					})}
				/>
				<span>{errors.email && 'Email adress should be valid 📨'}</span>
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
					ref={register({ required: true })}
					name="message"
				/>
				<span>{errors.message && "What's on your mind? 👀"}</span>
			</div>
			<Button onClick={handleSubmit(submit)} className={styles.submitButton}>
				Send
			</Button>
		</form>
	);
};

export default RequestForm;
