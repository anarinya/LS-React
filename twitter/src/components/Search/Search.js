import React from 'react';
import './Search.css';

export default (props) => {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Search Twitter" />
      </form>
    </div>
  );
};