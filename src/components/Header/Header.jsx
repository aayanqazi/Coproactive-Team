import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>

        <Button bsStyle="primary">Link</Button>
      </div>);
  }
}