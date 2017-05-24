import React from 'react';
import ReactDOM from 'react-dom';
import { App , } from './components/index.js'
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css'
// import injectTapEventPlugin from "react-tap-event-plugin";
// injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    fontSize: 35,
  },
  appBar: {
    height: 50,
  },
});


const MainApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MainApp />,
document.getElementById('root'));