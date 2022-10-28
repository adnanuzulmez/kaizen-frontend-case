import React from 'react'
import '../styles/HeaderStyle.css'
import '../styles/MediaStyle.css'
const Header = () => {
    const logo = 'data:image/png;base64,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'; 
  return (
    <div className='headerContainer'>
        <div className='header'>
            <div className='logo'>
                <a href="/">
                    <img className='logoImg' src={logo} alt="" />
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