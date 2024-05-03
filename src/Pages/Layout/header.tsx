import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlus, faArrowDown, faComments, faGear } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/img/logo1.png";
import backImg from "../../assets/img/main_back.png";
import avatar from "../../assets/img/avatar.png"

import './index.scss'

const Layout = (props : any) => {
    // const openAccount = useRef(null);
    const [openAccount, setOpen] = useState(false);
    const openAccounts = () =>  {
        setOpen(!openAccount);
    }
    
	return <>
		<div className='headerWrap' 
            style = {{paddingBottom: "20px", overflow: "auto", backgroundImage : `url(${backImg})`, width:'100vw', height:'100vh', backgroundSize : '100% 100%', minHeight:'100%'}}>
            <div className='header'>
                <Link to="/home"><img className='logoName' src={logo} /></Link>
                <select className='network'>
                    <option>ETH Mainnet</option>
                    <option>Oasis Mainnet</option>
                </select>
                <img className='avatar' src={avatar} onClick={() => openAccounts()} />
            </div>
            {
                openAccount ? (
                    <div className='account-div'>
                        <div className="account-menu__item account-menu__header">My Accounts
                            <button className="button btn--rounded btn-default account-menu__lock-button" role="button">Lock</button>
                        </div>
                        <div className="account-menu__divider"></div>
                        <div className='account-container active'>
                            <div className='account-item'>
                                <div className='account-check-mark'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className='account-avatar'>
                                    <img className='avatar' src={avatar} />
                                </div>
                                <div className="account-menu__account-info">
                                    <div className="account-menu__name">Account 1</div>
                                    <div className="currency-display-component account-menu__balance" title="0.00028227 ETH">
                                        <span className="currency-display-component__text">0.00028227</span>
                                        <span className="currency-display-component__suffix">ETH</span>
                                    </div>
                                </div>
                                <div className="keyring-label allcaps">Imported</div>
                                <div className="account-menu__icon-list">
                                    <div className="icon-border" style={{height: "32px", width: "32px"}}>
                                        <span className="icon-with-fallback__fallback">R</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='account-container'>
                            <div className='account-item'>
                                <div className='account-check-mark'>
                                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                                </div>
                                <div className='account-avatar'>
                                    <img className='avatar' src={avatar} />
                                </div>
                                <div className="account-menu__account-info">
                                    <div className="account-menu__name">Account 1</div>
                                    <div className="currency-display-component account-menu__balance" title="0.00028227 ETH">
                                        <span className="currency-display-component__text">0.00028227</span>
                                        <span className="currency-display-component__suffix">ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-menu__divider"></div>
                        <div className="account-menu__item--clickable">
                            <div className="account-menu__item__icon">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Link  className="account-menu__item__text" to="/home/create-account">
                                <div>Create Account</div>
                            </Link>
                        </div>
                        <div className="account-menu__item--clickable">
                            <div className="account-menu__item__icon">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                            <Link  className="account-menu__item__text" to="/home/import-account">
                                <div>Import Account</div>
                            </Link>
                        </div>
                        <div className="account-menu__item--clickable">
                            <div className="account-menu__item__icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <Link className="account-menu__item__text" to="/home/connect-wallet">
                                <div>Connect Hardware Wallet</div>
                            </Link>
                        </div>
                        <div className="account-menu__divider"></div>
                        <div className="account-menu__item--clickable">
                            <div className="account-menu__item__icon">
                                <FontAwesomeIcon icon={faComments} />
                            </div>
                            <div className="account-menu__item__text">Support</div>
                        </div>
                        <div className="account-menu__item--clickable">
                            <div className="account-menu__item__icon">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                            <Link className="account-menu__item__text" to="/setting/land">
                                <div>Settings</div>
                            </Link>
                        </div>
                    </div>
                ) :
                ""
            }

			{props.children}
			
      	</div>
	</>
}

export default Layout;