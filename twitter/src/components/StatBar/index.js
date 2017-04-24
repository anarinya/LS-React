import React, { Component } from 'react';
import './StatBar.css';
import { Button } from '../Button';
import { GiantAvatar} from '../Profile';

export const StatBar = (props) => {
  const { userData, tweets } = props;
  return (
    <div className="StatBar">
      <div className="stat-bar-left">
        <GiantAvatar userData={ userData } />
      </div>
      <div className="stat-bar-middle">
        <ProfileStats tweets={ tweets } />
      </div>
      <div className="stat-bar-right">
        <Button text="Following" />
        <MoreMenu />
      </div>
    </div>
  );
};

export class ProfileStats extends Component {
  countTweets(tweets) {
    return tweets.length;
  }

  countLikes(tweets) {
    return tweets.reduce((total, tweet) => total + tweet.likeCount, 0);
  }

  render() {
    return ( 
      <div className="ProfileStats">
        <ul>
          <StatItem heading="Tweets" count={this.countTweets(this.props.tweets)} />
          <StatItem heading="Following" count="885" />
          <StatItem heading="Followers" count="1,650" />
          <StatItem heading="Likes" count={this.countLikes(this.props.tweets)} />
        </ul>
      </div>
    );
  }
};

export const StatItem = (props) => {
  const { heading, count } = props;
  const itemStyle = heading.toLowerCase() === 'tweets' ? 'StatItem selected-item' : 'StatItem';
  return (
    <li className={itemStyle}>
      <span className="stat-heading">{ heading }</span> 
      <span className="stat-count">{ count }</span>
    </li>
  );
};

export const MoreMenu = (props) => {
  return (
    <span className="MoreMenu">
      <i className="fa fa-ellipsis-v" />
    </span>
  );
};