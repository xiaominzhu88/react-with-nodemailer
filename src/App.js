import React, { useState } from 'react';
import './App.scss';
import RequestForm from './components/RequestForm';

function App() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');

	return (
		<div className="App">
			<header className="App-header">
				<p>📨</p>
			</header>
			<RequestForm
				setName={setName}
				setEmail={setEmail}
				setMessage={setMessage}
				email={email}
				message={message}
				name={name}
			/>
		</div>
	);
}

export default App;
