import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';



function App() {

	// state to fetch data
	const [userData, setUserData] = useState([])

	useEffect(() => {

		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => response.json())
  			.then(json => setUserData(json))
	}, [])

	// Pass api data into the component
	return (
		<div className="uiContainer">
			<div>
				<Header />
				<ContactList contacts={userData}/>
			</div>
		</div>
	);

};

export default App;
