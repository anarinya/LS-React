import React from 'react';
import { TweetContainer } from '../Tweet';
import { Button } from '../Button';
import { SideBar } from '../SideBar';
import './Profile.css';

export const Profile = (props) => {
  const { userData, tweets } = props;
  return (
    <div className="Profile">
        <ProfileDetails userData={ userData } />
        <div className="reorder-sidebar">
          <SideBar />
        </div>
        <TweetContainer tweets={ tweets } userData={ userData } />
    </div>
  );
};

export const ProfileDetails = (props) => {
  const { userData } = props;
  const { name, handle, bio, location, link, joinDate, birthDate } = userData;
  return (
      <div className="ProfileDetails">
        <div className="profile-detail-area">
          <h1 className="profile-user">{ name }</h1>
          <span className="handle-area">
            <span className="profile-handle">{ handle }</span>
            <span className="follows-you">FOLLOWS YOU</span>
          </span>
          <p className="profile-bio">{ bio }</p>
          <ul className="profile-list fa-ul">
            <li>
              <i className="fa fa-li fa-map-marker"></i>
              { location }
            </li>
            <li>
              <i className="fa fa-li fa-link"></i>
              <a href={`http://www.${link}`}>{ link }</a></li>
            <li>
              <i className="fa fa-li fa-calendar"></i>
              Joined { joinDate }
            </li>
            <li>
              <i className="fa fa-li fa-birthday-cake"></i>
              Born on { birthDate }
            </li>
          </ul>
        </div>
        <Button icon="write" text="Tweet" /> <Button icon="message" text="Message" />
      </div>
  );
};

export const MiniAvatar = (props) => {
  const { name } = props.userData;
  const profileImageUrl = props.userData.profileImageUrl || 'img/default_profile.png';

  return (
    <div className="MiniAvatar">
      <img src={ profileImageUrl } alt={ name } />
    </div>
  );
};

export const GiantAvatar = (props) => {
  const { name } = props.userData;
  const profileImageUrl = props.userData.profileImageUrl || 'img/default_profile.png';

  return (
    <div className="GiantAvatar">
      <img src={ profileImageUrl } alt={ name } />
    </div>
  );
};