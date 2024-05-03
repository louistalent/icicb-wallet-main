import React from 'react';
import {Link} from "react-router-dom"; 

import './select.scss';

const Select = (props: any) => {
    const value = props.value;
	return <>
		<div className='selectbox-container'>
            <select className='dropdown'>
                {
                    value.map((value: string, index: number) => 
                        <option value="usd" key={index}>{value}</option>
                    )
                }
            </select>
        </div>
	</>
}

export default Select;