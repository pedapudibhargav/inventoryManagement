import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Invoice extends React.Component {

  render() {
    const style = {
      menuWrapper: {
        width:'280px',
        float:'left',
        height:"100%"
      },
      menu:{
      },
      menuPaper:{
      }
    };
    return (
      <div>
          <MuiThemeProvider>
              <h3>This is Invoice Page</h3>
          </MuiThemeProvider>
      </div>
    );
  }
}
