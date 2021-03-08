import React, { useState } from 'react';
import './App.scss';
import RequestForm from './components/RequestForm';

function App() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const submit = async (e) => {
		e.preventDefault();
		console.log({ email, message });
		const response = await fetch('/access', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ email, message }),
		});
		const resData = await response.json();
		if (resData.status === 'success') {
			alert('Message Sent.');
			this.resetForm();
		} else if (resData.status === 'fail') {
			alert('Message failed to send.');
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>📨</p>
			</header>
			<RequestForm
				submit={submit}
				setEmail={setEmail}
				setMessage={setMessage}
				email={email}
				message={message}
			/>
		</div>
	);
}

export default App;
