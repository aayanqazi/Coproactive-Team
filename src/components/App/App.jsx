import React from 'react';
import { Header, Main } from '../index.js'
import './App.css'

const styles = {
  images: {
  
    backgroundImage: "url('../../../public/assets/images/background.svg')"
  },
}

class App extends React.Component {
  render() {
    return (
      <div style={styles.images}>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}


export default App;