import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'

import './seed_phrase.scss'

const PhraseConfirm = () => {
	let seed = [
		"alone", "back", "car", " secret", 
		"leg", "will", "just", "come", 
		"turn", "hope", "ooh", 'hello', 
	];
	const [confirmValue, setConfirm] = useState<String[]>([])
 
	const seedClick = (val: number, element: any) => {
		if(element.className.indexOf("active") == -1) {
			element.classList.add("active");
			setConfirm([...confirmValue, seed[val]]);
		}
		else {
			let index = confirmValue.indexOf(seed[val]);
			confirmValue.splice(index, 1);
			element.classList.remove("active");
			setConfirm([...confirmValue]);
		}
		
	}

	console.log('confirmValue', confirmValue);

	return <>
		<Layout>
			<div style={{marginTop:'5%'}}>
				<div className="card">
					<h2 style={{ textAlign:'center'}}>Confirm your Secret Recovery Phrase</h2>
					<p>Please select each phrase in order to make sure it is correct.</p>
					<div className="word-panel">
						{confirmValue.map((seed, index) => (<span className='wordItem' key={index}>{seed}</span>))}
					</div>
					<div className='seed'>
						{seed.map((seeds, index) => {
							return (
								<button 
									key={index} 
									className='btn-word'
									onClick = {(e) => seedClick(index, e.target)}
								>
									{seeds}
								</button>
							)
						})}
					</div>
					<div className="row center" style={{padding:'15px 5px'}}>
						<Link className='btn-puc'  to="/done"  >Confirm</Link>
					</div>
				</div>
			</div>
		</Layout>	
	</>
}


export default PhraseConfirm;