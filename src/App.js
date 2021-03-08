import React, { useState } from 'react';
import './App.scss';
import RequestForm from './components/RequestForm';

function App() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	return (
		<div className="App">
			<header className="App-header">
				<p>📨</p>
			</header>
			<RequestForm
				setEmail={setEmail}
				setMessage={setMessage}
				email={email}
				message={message}
			/>
		</div>
	);
}

export default App;
