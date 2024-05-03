import React from 'react';
import { Bool } from 'reselect/es/types';
import './switch.scss';

const Switch = (isOn: any, handleToggle: any, onColor: string) => {
    console.log(handleToggle)
  return (
    <>
      <input
        // checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;