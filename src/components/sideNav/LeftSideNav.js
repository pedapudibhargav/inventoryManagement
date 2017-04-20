import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import darkBaseTheme from 'material-ui/styles/baseThemes/customInventoryTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionStore from 'material-ui/svg-icons/action/store';
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import MapsLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import SocialPeople from 'material-ui/svg-icons/social/people';
import NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
export default class LeftSideNav extends React.Component {

  render() {
    const style = {
      menuWrapper: {
        width:'280px',
        float:'left',
        height:"100%"
      },
      menu:{
        width:"width:280px",
        textAlign:"left",
        height:"100%",
        overflowY: "auto"
      },
      menuPaper:{
        width:"width:280px",
        height:"100%"
      },
      icon:{
        
      }

    };
    return (
        <div style={style.menuWrapper}>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Paper zDepth={2} style={style.menuPaper} >
                  <Menu style={style.menu}>
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
                  </Menu>
            </Paper>
          </MuiThemeProvider>
      </div>
    );
  }
}
