import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LeftSideNav from "./components/sideNav/LeftSideNav"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {navVisibility: false};
    this.handleLeftNavToggle = this.handleLeftNavToggle.bind(this);
  }

  handleLeftNavToggle() {
    this.setState({navVisibility: !this.state.navVisibility});
  }

  render() {
    const appStyle={
      minHeight:"100vh"
    }
    const style = {
      mainTag:{
        height:"calc(100vh - 62px)"
      },
      mainBody: {
        width:'calc(100% - 280px)',
        float:'left',
        minHeight:'100%'
      }
    };
    return (
      <div className="App" style={appStyle}>
        <MuiThemeProvider>
              <AppBar
                  title="Title"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                 style={{textAlign:'left'}}
                 onTouchTap={this.handleLeftNavToggle}/>
        </MuiThemeProvider>
        <main style={style.mainTag}>
            <LeftSideNav ></LeftSideNav>
            <div id="main-body" style={style.mainBody}>

            </div>
        </main>
      </div>
    );
  }
}

injectTapEventPlugin();
export default App;
