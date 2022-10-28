import React from 'react'
import '../styles/HeaderStyle.css'
import '../styles/MediaStyle.css'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='header'>
            <div className='logo'>
                <a href="/">
                    <img className='logoImg' src='/logo.png' alt="" />
                </a>
            </div>
            <div className='accountProcess'>
                <button className='wallet headerMainBtn'>DAHA CÜZDAN</button>
                <button className='loginSignin headerMainBtn'>Giriş Yap/Kayıt Ol</button>
                <button className='userIcon'>
                    <img src="https://www.dahadaha.com/static/media/user.6b08a4cfd3f08f40c09e5ca3af13fa5f.svg" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header