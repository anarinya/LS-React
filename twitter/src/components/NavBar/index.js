import React from 'react';
import './NavBar.css';
import Search from '../Search/Search';
import { Button } from '../Button';

export const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="nav-section"><Menu /></div>
      <div className="nav-section"><Logo /></div>
      <div className="nav-section">
        <Search />
        <AccountMenu userData={ props.userData } />
      </div>
    </div>
  );
};

export const Menu = (props) => {
  return (
     <ul className="Menu">
        <li><a href="#"><i className="fa fa-home"></i> Home</a></li>
        <li><i className="fa fa-bolt"></i> Moments</li>
        <li><i className="fa fa-bell"></i> Notifications</li>
        <li><i className="fa fa-envelope"></i> Messages</li>
      </ul>
  );
};

export const Logo = (props) => {
  return (
    <span className="Logo t-blue">
      <a href="#"><i className="fa fa-twitter"></i></a>
    </span>
  );
};

export const AccountMenu = (props) => {
  const { profileImageUrl } = props.userData;
  return (
    <span className="AccountMenu">
      <img className="avatar" src={profileImageUrl} alt="user" />
      <Button icon="write" text="Tweet" />
    </span>
  );
};