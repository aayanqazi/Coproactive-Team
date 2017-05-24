import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './Main.css'


const styles = {
  startBtn: {
    backgroundColor: '#4094ed',
    textAlign: 'center',
    color: '#fff',
    height: 60,
    width: 200,
    borderRadius: 10,
  },
}

class Main extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <div className='child-container'>
          <h1 className='title'>We build better apps.</h1>
          <p className='quote'>Gigster is a smart software development service, combining top <br /> developers and designers with artificial intelligence.</p>
          <br />
          <div className='cntrBtn'>
            <FlatButton label='Start a project' style={styles.startBtn} />
          </div>
        </div>
        <br /> <br /> <br /> <br /><hr className='col-12' />
      </div>
    );
  }
}

export default Main;