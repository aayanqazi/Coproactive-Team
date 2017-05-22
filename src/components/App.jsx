import React from 'react';
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <h1>Hello</h1>
      </div>
      );
  }
}