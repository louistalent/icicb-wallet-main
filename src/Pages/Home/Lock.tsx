import React from 'react';
import {Link} from "react-router-dom"; 
import Layout from '../Layout/Index'

import './home.scss'

const Lock = () => {
	return <>
		<Layout>
			<div className='lockContent'>
				<h1>Welcome to ICICB Metamask</h1>
				<p>Connecting you to Ethereum and the Decentralized Web.</p>
				<input 
					style={{width: "80%"}}
					type="password" 
					className='input-password w100'
				/>
				<div style={{marginTop: "30px", width: "80%", display: "flex", justifyContent: "center"}}>
					<Link className='btn-puc1'  to="/home">
						Unlock
					</Link>
				</div>
				<label className="mt3  container-check" style={{width: "80%", padding: "0", textAlign: "center"}} >
					I have read and agree to the <a style={{color:'#016da1'}} href='https://metamask.io/terms.html' target="_blank">  Terms of Use</a>
				</label>
			</div>
		</Layout>	
	</>
}


export default Lock;