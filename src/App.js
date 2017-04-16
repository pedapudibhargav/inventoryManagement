import React, { Component } from 'react';
{/* import ReactDOM from 'react-dom'; */}
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import LeftSideNav from "./components/sideNav/LeftSideNav";
import Dashboard from "./views/Dashboard";
import Products from "./views/Products";
import POS from "./views/POS";

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
        height:'100%',
        minHeight:'100%'
      }
    };
    return (
      <div className="App" style={appStyle}>
        <MuiThemeProvider>
          <Paper zDepth={2} style={style.menuPaper} >
              <AppBar
                  title="Title"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                 style={{textAlign:'left'}}
                 onTouchTap={this.handleLeftNavToggle}/>
          </Paper>
        </MuiThemeProvider>

        <Router>
          <main style={style.mainTag}>
              <LeftSideNav ></LeftSideNav>
              <div id="main-body" style={style.mainBody}>
                       <Route exact path="/" component={Dashboard}/>
                       <Route path="/products" component={Products}/>
                       <Route path="/pos" component={POS}/>
              </div>
          </main>
        </Router>
      </div>
    );
  }
}

injectTapEventPlugin();
export default App;
