import React from 'react';
import './Button.css';

export const Button = (props) => {
  let { text } = props;
  let icon;

  switch (props.icon) {
    case 'write':
      icon = 'fa-pencil-square-o btn-lg';
      break;
    case 'message':
      icon = 'fa-envelope';
      break;
    case 'adduser':
      icon = 'fa-user-plus'
      break;
    default:
      icon = null;
  }
  return (
    <button className="Button">
      {icon ? <i className={`fa ${icon} btn-icon`}></i> : ''}
      <span className="btn-text">{ text }</span>
    </button>
  );
};