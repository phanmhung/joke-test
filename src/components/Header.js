import React from 'react'
import './Header.css';

function Header() {
  return (
    <>
    <div className='header'>
      <div className="header-logo">HL</div>
      <div className="avatar-container">
          <p className="avatar-name"><i>Handicrafted by</i> <span>Jim HLS</span></p>
          <img src='/images/avatar.jpg' alt='avatar' className="avatar-logo"></img>
      </div>
    </div>
    </>
  )
}

export default Header