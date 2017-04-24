import React, { Component } from 'react';
import { MiniAvatar } from '../Profile';
import './Tweet.css';

export const TweetContainer = (props) => {
  const { userData, tweets } = props;
  return (
    <div className="TweetContainer">
      <div className="tweet-nav">
        <ul>
          <li className="active">Tweets</li>
          <li>Tweets & Replies</li>
          <li>Media</li>
        </ul>
      </div>
      <Feed tweets={ tweets } userData={ userData } />
    </div>
  );
};

export const Feed = (props) => {
  const { tweets, userData } = props;
  return (
    <div className="Feed">
      { tweets.map((tweet, index) => <Tweet key={ index } tweet={ tweet } userData={ userData } />) }
    </div>
  );
};

export class Tweet extends Component {
  constructor(props) {
    super(props);

    this.incCount = this.incCount.bind(this);

    this.state = {
      replyInc: false,
      retweetInc: false,
      likeInc: false,
      replyCount: this.props.tweet.replyCount,
      retweetCount: this.props.tweet.retweetCount,
      likeCount: this.props.tweet.likeCount
    };
  }

  incCount(type) {
    const incProp = type + 'Inc';
    const countProp = type + 'Count';

    if (!this.state[incProp]) {
      this.setState((prevState) => {
        return {
          [incProp]: true,
          [countProp]: prevState[countProp] + 1
        }
      });
    }
  }

  render() {
    const { userData } = this.props;
    const { name, handle } = userData;
    const { date, text } = this.props.tweet;
    return (
      <div className="Tweet">
        <MiniAvatar userData={ userData } />
        <div className="tweet-content">
          <div className="tweet-info">
            <span className="tweet-author">{ name }</span>
            <span className="tweet-handle">{ handle }</span>
            <span className="tweet-date">{ date }</span>
            <span className="tweet-menu">
              <a href="#"><i className="fa fa-chevron-down"></i></a>
            </span>
          </div>
          <div className="tweet-text">
            { text }
          </div>
          <ul className="tweet-stats">
            <StatButton 
              handleInc={ this.incCount } 
              inc={ this.state.replyInc } 
              count={ this.state.replyCount } 
              type="reply" />
            <StatButton 
              handleInc={ this.incCount } 
              inc={ this.state.retweetInc }
              count={ this.state.retweetCount } 
              type="retweet" />
            <StatButton 
              handleInc={ this.incCount } 
              inc={ this.state.likeInc }
              count={ this.state.likeCount } 
              type="like" />
          </ul>
        </div>
      </div>
    );
  }
};

export class StatButton extends Component {
  constructor(props) {
    super(props);

    this.getIconClass = this.getIconClass.bind(this);
  }
  getIconClass() {
    const { type } = this.props;
    return type === 'like' ? 'fa fa-heart' : `fa fa-${type}`;
  }

  getListClass() {
    const { inc, type } = this.props;
    let style = inc ? 'incremented ' : '';
    
    switch(type) {
      case 'reply': style += 'tweet-replies'; break;
      case 'retweet': style += 'tweet-retweets'; break;
      case 'like': style += 'tweet-likes'; break;
      default: style += '';
    }
    return style;
  }

  render() {
    const { type, count } = this.props;
    return (
      <li onClick={ () => this.props.handleInc(type) } className={ this.getListClass() }>
        <i className={ this.getIconClass() }></i>
        <span className="count">{ count }</span> 
      </li> 
    );
  }
}

export const TweetDetailModal = (props) => {
  return (
    <div className="TweetDetailModal">
      Hello
    </div>
  );
};