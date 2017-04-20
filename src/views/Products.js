import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/customInventoryTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ProductList from '../components/ProductList';
import ProductsListToolBar from '../components/ProductsListToolBar';
import ProductDetailView from '../components/ProductDetailView';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productSelected: {
      "meta": "",
      "su": 1,
      "hide_interaction_condition": {},
      "available": 0,
      "oPrice": 0,
      "slug": "otc224435",
      "is_banned": false,
      "prescriptionRequired": false,
      "pId": 0,
      "mrp": 0,
      "hkpDrugCode": 0,
      "therapeuticClassName": null,
      "label": "",
      "pForm": "",
      "uPrice": 1890,
      "type": "OTC",
      "productsForBrand": null,
      "uip": 1,
      "packSize": "1 kit",
      "mfId": 0,
      "packForm": "",
      "generics": null,
      "name": "Please select a product",
      "discounted_price": null,
      "form": "",
      "drug_form": "",
      "id": 0,
      "packSizeLabel": "",
      "manufacturer": "",
      "pName": "",
      "imgUrl": null,
      "discountPerc": 0
    },
    products:[{
      "meta": "",
      "su": 1,
      "hide_interaction_condition": {},
      "available": 0,
      "oPrice": 0,
      "slug": "otc224435",
      "is_banned": false,
      "prescriptionRequired": false,
      "pId": 0,
      "mrp": 0,
      "hkpDrugCode": 0,
      "therapeuticClassName": null,
      "label": "",
      "pForm": "",
      "uPrice": 1890,
      "type": "OTC",
      "productsForBrand": null,
      "uip": 1,
      "packSize": "1 kit",
      "mfId": 0,
      "packForm": "",
      "generics": null,
      "name": "Please select a product",
      "discounted_price": null,
      "form": "",
      "drug_form": "",
      "id": 0,
      "packSizeLabel": "",
      "manufacturer": "",
      "pName": "",
      "imgUrl": null,
      "discountPerc": 0
    }]
  };
    this.handleProductClick = this.handleProductClick.bind(this);
  }
  handleProductClick(productId) {
    this.setState({productSelected: productId});
  }
  render() {
    const style = {
      prodOuter:{
        padding:"20px",
        height:"calc( 100% - 40px )"
      },
      prodList: {
        width:'calc( 50% - 4px)',
        float:'left',
        maxHeight:"calc( 100% - 60px)",
        hegiht:"calc( 100% - 60px)",
        overflowY:"auto",
        border: "1px solid rgb(224, 224, 224)"
      },
      prodDetails: {
        width:'calc( 50% - 20px )',
        float:'left',
        paddingLeft:'20px',
        minHeight:"calc( 100% - 60px)",
        hegiht:"auto",
        paddingTop:"20px"
      }
    };
    return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div style={style.prodOuter}>
              <ProductsListToolBar></ProductsListToolBar>
              <div style={style.prodList}>
                <ProductList products = {this.state.products} onProductClick={this.handleProductClick}></ProductList>
              </div>
              <div style={style.prodDetails}>
                <ProductDetailView product={this.state.productSelected}></ProductDetailView>
              </div>
            </div>
          </MuiThemeProvider>
    );
  }
}
