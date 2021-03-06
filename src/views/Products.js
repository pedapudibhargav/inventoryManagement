import React from "react";
import axios from 'axios';
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
      "imgUrl": "http://www.crocin.com/content/dam/global/panadol/en_IN/418x418/crocin-advance-medicine.png",
      "discountPerc": 0
    },
    products:[{
      "meta": "",
      "su": 1,
      "hide_interaction_condition": {},
      "available": 0,
      "oPrice": 1234,
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
      "name": "This is a dummy product",
      "discounted_price": null,
      "form": "",
      "drug_form": "",
      "id": 4124324,
      "packSizeLabel": "",
      "manufacturer": "",
      "pName": "",
      "imgUrl": null,
      "discountPerc": 0
    }]
  };
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch = (searchText) => {
    console.log("Everything is in place:"+searchText);
    var hostURLPrefix = "";
    if(window.location.hostname == 'localhost')
    {
      hostURLPrefix = "http://"+ window.location.hostname + ":3001"
    }
    var url = hostURLPrefix + '/store01/products';

    if(searchText)
    {
      url = hostURLPrefix + '/store01/product/'+searchText;
    }
    axios.get(url)
    .then(response => {
      console.log(response);
      this.setState({
            products:response.data
        });
    })
    .catch(function (error) {
      console.log(error);
    });
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
              <ProductsListToolBar onSearch={this.handleSearch}></ProductsListToolBar>
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
