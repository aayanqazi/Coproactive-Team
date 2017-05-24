import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className='nav-bar-header'>
        <div className='row'>
          <div className='col-3 '><FlatButton label='Learn More' className='btn1'/></div>
          <div className='col-5 logo'><img src="../public/assets/images/logo.svg" alt="team-logo" className='img-logo'/></div>
          <div className='col-2 num'>+1(941)888-4447</div>
          <div className='col-2 loginBtn'><span className='line'></span>Login</div>
        </div>
      </div>
    );
  }
}