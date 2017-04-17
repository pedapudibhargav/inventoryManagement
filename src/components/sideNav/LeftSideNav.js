import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
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
        height:"100%"
      },
      menuPaper:{
        width:"width:280px",
        height:"100%"
      }
    };
    return (
        <div style={style.menuWrapper}>
          <MuiThemeProvider>
            <Paper zDepth={2} style={style.menuPaper} >
                  <Menu style={style.menu}>
                    <Link to="/">
                      <MenuItem primaryText="Dashboard" leftIcon={<ActionDashboard />} />
                    </Link>
                    <Link to="/">
                      <MenuItem primaryText="Stores" leftIcon={<ActionStore />} />
                    </Link>
                    <Link to="/products">
                      <MenuItem primaryText="Products" leftIcon={<ActionStore />} />
                    </Link>
                    <Divider />
                    <Link to="/pos">
                      <MenuItem primaryText="POS" leftIcon={<ActionAddShoppingCart />} />
                    </Link>
                    <MenuItem primaryText="Sales" leftIcon={<NavigationSubdirectoryArrowRight />}/>
                    <MenuItem primaryText="Bills" leftIcon={<NavigationSubdirectoryArrowRight />}/>
                    <Divider />
                    <MenuItem primaryText="Purchase Orders" leftIcon={<MapsLocalShipping />} />
                    <MenuItem primaryText="Invoice" leftIcon={<NotificationEventNote />} />
                    <Divider />
                    <MenuItem primaryText="Customers" leftIcon={<SocialPeople />} />
                    <MenuItem primaryText="Delaers" leftIcon={<SocialPeople />} />
                    <MenuItem primaryText="Doctors" leftIcon={<SocialPeople />} />
                  </Menu>
            </Paper>
          </MuiThemeProvider>
      </div>
    );
  }
}
