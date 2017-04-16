import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductList from '../components/ProductList';
import ProductsListToolBar from '../components/ProductsListToolBar';

export default class Products extends React.Component {

  render() {
    const style = {
      prodOuter:{
        padding:"20px",
        height:"calc( 100% - 40px )"
      },
      prodList: {
        width:'calc( 50% - 4px)',
        float:'left',
        minHeight:"100%",
        hegiht:"100%",
        overflowY:"auto",
        border: "1px solid rgb(224, 224, 224)"
      },
      prodDetails: {
        width:'50%',
        float:'left',
        height:"100%"
      }
    };
    return (
          <MuiThemeProvider>
            <div style={style.prodOuter}>
              <div style={style.prodList}>
                <ProductsListToolBar></ProductsListToolBar>
                <ProductList></ProductList>
              </div>
              <div style={style.prodDetails}>
                <h3>Product Details View</h3>
              </div>
            </div>
          </MuiThemeProvider>
    );
  }
}
