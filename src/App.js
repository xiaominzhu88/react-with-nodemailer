import React, { useState, useEffect } from 'react';
import './App.scss';
import RequestForm from './components/RequestForm';
import lottie from 'lottie-web';
import animationLogo from './static/animation.json';

function App() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector('#animation-logo'),
			animationData: animationLogo,
			renderer: 'svg',
			loop: true,
			autoplay: true,
		});
	}, []);

	return (
		<>
			<div className="App">
				<RequestForm
					setName={setName}
					setEmail={setEmail}
					setMessage={setMessage}
					email={email}
					message={message}
					name={name}
				/>
				<div id="animation-logo" style={{ width: 400, height: 400 }} />
			</div>
		</>
	);
}

export default App;
