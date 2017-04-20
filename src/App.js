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
import darkBaseTheme from 'material-ui/styles/baseThemes/customInventoryTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionStore from 'material-ui/svg-icons/action/store';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import MapsLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import SocialPeople from 'material-ui/svg-icons/social/people';
import NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
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
        height:'100%',
        minHeight:'100%'
      }
    };
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="App" style={appStyle}>
          <Paper zDepth={2} style={style.menuPaper} >
              <AppBar
                  title="Title"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                 style={{textAlign:'left'}}
                 onTouchTap={this.handleLeftNavToggle}
                 onLeftIconButtonTouchTap = {this.handleLeftNavToggle}/>
          </Paper>


        <Router>
          <main style={style.mainTag}>
              <Drawer docked={false} open={this.state.navVisibility}>
                  <AppBar
                    title=""
                    iconElementRight={<IconButton><NavigationArrowBack /></IconButton>}
                    showMenuIconButton = {false}
                    onRightIconButtonTouchTap = {this.handleLeftNavToggle}
                    />
                  <Link to="/">
                    <MenuItem primaryText="Dashboard" leftIcon={<ActionDashboard style={style.icon}/>} />
                  </Link>
                  <Link to="/">
                    <MenuItem primaryText="Stores" leftIcon={<ActionStore style={style.icon} />} />
                  </Link>
                  <Link to="/products">
                    <MenuItem primaryText="Products" leftIcon={<ActionStore style={style.icon} />} />
                  </Link>
                  <Divider />
                  <Link to="/pos">
                    <MenuItem primaryText="POS" leftIcon={<ActionAddShoppingCart style={style.icon} />} />
                  </Link>
                  <MenuItem primaryText="Sales" leftIcon={<NavigationSubdirectoryArrowRight style={style.icon} />}/>
                  <MenuItem primaryText="Bills" leftIcon={<NavigationSubdirectoryArrowRight  style={style.icon}/>}/>
                  <Divider />
                  <MenuItem primaryText="Purchase Orders" leftIcon={<MapsLocalShipping  style={style.icon}/>} />
                  <MenuItem primaryText="Invoice" leftIcon={<NotificationEventNote  style={style.icon}/>} />
                  <Divider />
                  <MenuItem primaryText="Customers" leftIcon={<SocialPeople style={style.icon} />} />
                  <MenuItem primaryText="Delaers" leftIcon={<SocialPeople  style={style.icon}/>} />
                  <MenuItem primaryText="Doctors" leftIcon={<SocialPeople  style={style.icon}/>} />
              </Drawer>
              <div id="main-body" style={style.mainBody}>
                       <Route exact path="/" component={Dashboard}/>
                       <Route path="/products" component={Products}/>
                       <Route path="/pos" component={POS}/>
              </div>
          </main>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();
export default App;
