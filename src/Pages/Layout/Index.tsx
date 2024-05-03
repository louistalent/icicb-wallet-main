import React from 'react';
import {Link} from "react-router-dom"; 
import logo from "../../assets/img/logo.png";
import welcomeImg from "../../assets/img/welcome_back.png";
import backImg from "../../assets/img/main_back.png";

const Layout = (props : any) => {
	return <>
		<div style = {{backgroundImage : `url(${backImg})`, width:'100vw', height:'100%', minHeight:'100%'}}>
			<div className='logo'><img src={logo}></img></div>
			{props.children}
			
      	</div>
	</>
}

export default Layout;