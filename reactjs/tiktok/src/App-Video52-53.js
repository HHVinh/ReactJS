import { useState } from 'react'
import Button from './componentsVideo52/Button'
import GlobalStyles from './componentsVideo52/GlobalStyles'

function App() {

	const [primary, setPrimary] = useState('primary1')

	const handleClick = () => {
		const choices = ['primary1', 'primary2', 'primary3', 'primary4'];
		const random = choices[Math.floor(Math.random() * choices.length)];
		setPrimary(random);
	};

	return (
		<GlobalStyles>
			<div style={{textAlign: 'center', padding: '10px'}}>
				<Button primary={primary} onClick={handleClick} />
			</div>
		</GlobalStyles>
	)
}

export default App