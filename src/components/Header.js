import React from 'react';

const Header = ({ item, toggleHeader }) => {
  return (
    <div className='mainDiv'>
      <h2 className='headingText' onClick={() => toggleHeader(item.id)}>{item.text}</h2>
      <div>
        <a onClick={() => toggleHeader(item.id)}>
          {item.showText ?
            <img width="30" height="30" src="https://img.icons8.com/ios/50/login-rounded-up.png" alt="up-arrow" /> :
            <img width="30" height="30" src="https://img.icons8.com/ios/50/circled-chevron-down.png" alt="expand-arrow" />
          }
        </a>
      </div>
    </div>
  );
};

export default Header;
