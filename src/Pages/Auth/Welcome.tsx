import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from './Layout'

import './welcome.scss'
const Welcome = () => {
	return <>
		<Layout>
			<div className='welcomeCotnent'>
				<h3>Welcome to ICICB Metamask</h3>
				<p>Connecting you to Ethereum and the Decentralized Web.</p>
				<div>
					<Link className='btn-puc'  to="/select-action">
						Get Started
					</Link>
				</div>
			</div>
		</Layout>	
	</>
}


export default Welcome;