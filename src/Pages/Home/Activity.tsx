import React from 'react';
import {Link} from "react-router-dom"; 

import "./Activity.scss"

const Activity = () => {
	return <>
		<div className='activity'>
			<div className="list-item__icon">
				<svg width="35" height="35" viewBox="0 0 35 35" fill="#281a05" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#2F80ED"></rect><path d="M18.5851 9.88921C18.5586 9.89005 18.5321 9.89238 18.5057 9.89618H14.3207C14.0635 9.89254 13.8243 10.0276 13.6947 10.2497C13.565 10.4719 13.565 10.7466 13.6947 10.9687C13.8243 11.1908 14.0635 11.3259 14.3207 11.3222H16.8777L9.53811 18.6614C9.35182 18.8402 9.27679 19.1058 9.34193 19.3557C9.40707 19.6056 9.60222 19.8007 9.85211 19.8658C10.102 19.931 10.3676 19.8559 10.5464 19.6697L17.886 12.3305V14.8874C17.8823 15.1445 18.0175 15.3837 18.2396 15.5133C18.4617 15.643 18.7364 15.643 18.9585 15.5133C19.1806 15.3837 19.3158 15.1445 19.3121 14.8874V10.6997C19.3409 10.4919 19.2767 10.282 19.1366 10.1259C18.9965 9.96973 18.7948 9.88316 18.5851 9.88921Z" fill="#2F80ED"></path>
				</svg>
			</div>
			<div className="list-item__heading">
				<h2 className="list-item__title">Send</h2>
			</div>
			<div className="list-item__subheading">
				<h3>
					<div className="transaction-status transaction-status--confirmed">Feb 17 .&nbsp;</div>
					<span className="transaction-list-item__address" title="To: 0xd27...a22f"> To: 0xd27...a22f</span>
				</h3>
			</div>
			<div className="list-item__right-content">
				<h2 title="-0.008 ETH" className="transaction-list-item__primary-currency">-0.008 ETH</h2>
				<h3 className="transaction-list-item__secondary-currency">-0.008 ETH</h3>
			</div>
		</div>
	</>
}

export default Activity;