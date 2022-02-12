import './App.scss';

//import useSelector hook from redux
import { useSelector, useDispatch } from 'react-redux';

import Info from './components/complex/Info/Info';
import Pricing from './components/complex/Pricing/Pricing';
import Benefits from './components/complex/Benefits/Benefits';


export default function App() {



	return (
		<div className="App">
			

			<Info />
			
			<Pricing />

			<Benefits />
			
		</div>
	);
}
