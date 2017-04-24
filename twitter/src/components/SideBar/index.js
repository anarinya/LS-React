import React from 'react';
import './SideBar.css';
import '../Profile/Profile.css';
import { MiniAvatar } from '../Profile';
import { Button } from '../Button';

const guysToFollow = [
  { name: "Bill Mitchell", handle: "@mitchellvii" }, 
  { name: "Dalton Hubble", handle: "@dghubble" }, 
  { name: "StartFEST", handle: "@StartFEST" }
];

export const SideBar = (props) => {
  return (
    <div className="SideBar">
      <SideCardFollow />
    </div>
  );
};

export const SideCardFollow = (props) => {
  return (
    <div className="SideCardFollow">
      <div className="card">
        <div className="card-header">
          Who to Follow
          <span className="options">Refresh</span>
          <span className="options">View all</span>
        </div>
        <div className="card-body">
          { guysToFollow.map((dude, index) => <SideCardFollowItem key={ index } userToFollow={ dude } />) }
          <div className="find-friends">
            Find Friends
          </div>
        </div>
      </div>
    </div>
  );
};

export const SideCardFollowItem = (props) => {
  const { name, handle } = props.userToFollow;
  return (
    <div className="SideCardFollowItem">
      <div className="card-item">
        <MiniAvatar userData={ props.userToFollow } />
        <div className="card-item-content">
          <span className="card-item-user">{ name }</span>
          <span className="card-item-handle">{ handle }</span>
          <div className="card-item-btn">
            <Button text="Follow" icon="adduser" />
          </div>
        </div>
      </div>
    </div>
  );
};