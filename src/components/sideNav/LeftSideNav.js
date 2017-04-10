import React from "react";
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default class LeftSideNav extends React.Component {
  constructor(props) {
   super(props);
   this.state = {isToggleOn: this.props.navToggle};
 }
  render() {
    const sideNavBg = {
      position:'fixed',
      top:0,
      left:0,
      right:0,
      bottom:0,
      zIndex:1200,
      backgroundColor:"rgba(0,0,0,0.3)"
    };
    const NavBg = {
      position:'fixed',
      top:0,
      left:0,
      bottom:0,
      width:"200px",
      zIndex:1200,
      backgroundColor:"#fff"
    };
    const navCloseIconStyle = {
      position:"fixed",
      top:"0px",
      left:"200px",
      width:"40px",
      zIndex: 2
    };
    if(!this.props.navVisibility)
    {
      console.log("Visiblity:"+this.props.navVisibility);
      return null;
    }
    return (
      <div >
        <MuiThemeProvider>
          <Paper style={sideNavBg}>
            <Menu style={NavBg} >
              <FloatingActionButton mini={true} secondary={true}  style={navCloseIconStyle} onTouchTap={this.props.handleToggle} >
                <NavigationArrowBack />
              </FloatingActionButton>
              <MenuItem primaryText="Maps" />
              <MenuItem primaryText="Books" />
              <MenuItem primaryText="Flights" />
              <MenuItem primaryText="Apps" />
            </Menu>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}
