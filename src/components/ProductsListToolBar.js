import React from 'react';
import axios from 'axios';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ProductsListToolBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "showAll",
      open: false,
      name:"",
      manufacturer:"Roche Products India Pvt Ltd",
      drug_form:"tablet",
      packForm:"",
      imgUrl:"",
      is_banned: true,
      prescriptionRequired: false,
      minStockValue:0,
      productNameSug:[],
      productSugList:[],
    };
    this.handleChangeToggle = this.handleChangeToggle.bind(this);
    this.handlePrductNameChange = this.handlePrductNameChange.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch = () =>{
    this.props.onSearch();
  }

  handleChangeToggle = (id, name, evt, key, payload) => {
    console.log("Toggle value:" + !this.state[name]);
    this.setState({
      [name]: !this.state[name]
    } );
 };

  handleChange = (event) => {
      const target = event.target;
      let value = "";
      value = target.value;
      const name = target.name;
      // console.log(event);
      // console.log("inside handle change:"+value+"-:"+name);
      this.setState({
        [name]: value
      } );
   }

   handleSelectChange = (id, name, evt, key, payload) => {
     this.setState({
       [name]: payload
     } );
  };

   handleListClick = () => {
     console.log("**** List item selected:"+JSON.stringify(this.state.productSugList[0].name));

     this.setState({
       "name":this.state.productSugList[0].name,
       "manufacturer":this.state.productSugList[0].manufacturer,
       "drug_form":this.state.productSugList[0].drug_form,
       "is_banned": this.state.productSugList[0].is_banned,
       "prescriptionRequired": this.state.productSugList[0].prescriptionRequired,
       "packForm":this.state.productSugList[0].packForm
     } );

     if(this.state.productSugList[0].imgUrl)
     {
       this.setState({
          "imgUrl":this.state.productSugList[0].imgUrl
       });
     }
   };

   handlePrductNameChange = (searchText) => {
     console.log("This is what Entered:"+searchText.length);
     var hostURLPrefix = ""
     if(window.location.hostname == 'localhost')
     {
       hostURLPrefix = "http://"+ window.location.hostname + ":3001"
     }
     if(searchText.length > 3)
      {
        console.log("trigger the autocomplete");
        var config = {
          headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.get(hostURLPrefix + '/findproducts/'+searchText)
          .then(response => {
            console.log(response.data.length);
            var products = response.data;
            var productNameArray = products.map(function(a) {return a.name;});
            this.setState({
              "productNameSug": productNameArray.slice(0),
              "productSugList": products
            } );
            console.log("Array length:"+JSON.stringify(productNameArray));
            console.log("State Value:" + JSON.stringify(this.state.productNameSug));

          })
          .catch(function (error) {
            console.log(error);
          });
      }
      else{
        this.setState({
          "productNameSug": []
        } );
      }
       this.setState({
         "name": searchText
       } );
    }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    var finalProductObj = {
      "name":this.state.name,
      "manufacturer":this.state.manufacturer,
      "drug_form":this.state.drug_form,
      "packForm":this.state.packForm,
      "imgUrl":this.state.imgUrl,
      "is_banned":this.state.is_banned,
      "prescriptionRequired":this.state.prescriptionRequired,
      "minStockValue":this.state.minStockValue
    };

    console.log(JSON.stringify(finalProductObj));
    var hostURLPrefix = ""
    if(window.location.hostname == 'localhost')
    {
      hostURLPrefix = "http://"+ window.location.hostname + ":3001"
    }
    axios({
      method: 'post',
      url: hostURLPrefix + '/store01/addProduct',
      data: finalProductObj
    })
    .then(function (response) {
        console.log("Product saved");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });




    this.setState({open: false});
  };


  render() {
    const style = {
      selectBoxStyle:{
        textAlign:'left',
        height:'60px',
        marginTop:"-10px"
      },
      toolBarSeperator:{
        marginRight:"20px"
      },
      selectBoxLableStyle:{
        marginTop:"8px"
      },
      toggle: {
        marginTop:"30px"
      },
      toggleLabelStyle:{
        marginLeft:"20px"
      }
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];
    const manufacturerList = [
	"Roche Products India Pvt Ltd",
	"Meridian Enterprises Pvt Ltd",
	"Anthus Pharmaceuticals Pvt Ltd",
	"Rostrumed Biotech Pvt Ltd",
	"West-Coast Pharmaceutical Works Ltd",
	"Brio Bliss Life Science Pvt Ltd",
	"Evaxo Pharma",
	"Emcure Pharmaceuticals Ltd",
	"ITC ltd",
	"Wiscon Pharmaceuticals Pvt Ltd",
	"Biochem Pharmaceutical Industries",
	"Abbott India Ltd",
	"Saffron Therapeutics Pvt Ltd",
	"Vivid Biotek Pvt Ltd",
	"Zee Laboratories",
	"Themis Medicare Ltd"
];

    const manufacturerMenuItem =  manufacturerList.map(
                            (itemIn, index) =>
                            <MenuItem key={index} value={itemIn} primaryText={itemIn} />
                          );
    const minimumStockList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(
      (num,index) =>
      <MenuItem key={index} value={num} primaryText={num} />
    );
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>

          <RaisedButton
            label="Add Product"
            primary={true}
            icon={<ContentAdd />}
            onTouchTap={this.handleOpen}
          />
          <RaisedButton
            label="Search"
            primary={true}
            onTouchTap={this.handleSearch}
          />
          <Dialog
          title="Create New Product"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          >
          <form id="addNewProduct">
                  <div className="row">
                    <div className="col-sm-6">
                      <AutoComplete
                        floatingLabelText="Product name"
                        name="name"
                        fullWidth={true}
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={this.state.productNameSug}
                        maxSearchResults = {5}
                        onUpdateInput = {this.handlePrductNameChange}
                        onNewRequest = {this.handleListClick}
                      />
                    </div>
                    <div className="col-sm-6">
                      <SelectField floatingLabelText="Manufacturer" name="manufacturer" value={this.state.manufacturer} fullWidth={true} onChange={this.handleSelectChange.bind(null,"id","manufacturer")}>
                          {manufacturerMenuItem}
                          <MenuItem value={"Roche Products India Pvt Ltd"} primaryText="Roche Products India Pvt Ltd" />
                      </SelectField>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                        <SelectField floatingLabelText="Drug Form" name="drug_form" value={this.state.drug_form} fullWidth={true} onChange={this.handleSelectChange.bind(null,"id","drug_form")}>
                            <MenuItem value={"lancets"} primaryText="Lancets" />
                            <MenuItem value={"tablet"} primaryText="Tablet" />
                            <MenuItem value={"capsule"} primaryText="Capsule" />
                            <MenuItem value={"syrup"} primaryText="Syrup" />
                            <MenuItem value={"injection"} primaryText="Injection" />
                            <MenuItem value={"chewing gums"} primaryText="Chewing gums" />
                            <MenuItem value={"drop"} primaryText="Drop" />
                            <MenuItem value={"device"} primaryText="Device" />
                            <MenuItem value={"kit"} primaryText="Kit" />
                            <MenuItem value={"gel"} primaryText="Gel" />
                            <MenuItem value={"tablet sr"} primaryText="Tablet Sr" />
                            <MenuItem value={"toothpaste"} primaryText="Toothpaste" />
                        </SelectField>
                    </div>
                    <div className="col-sm-6">
                        <TextField hintText="Image URL" name="imgUrl" floatingLabelText="Image URL" value={this.state.imgUrl} fullWidth={true} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                      <Toggle label="Is Banned?"  labelPosition="right" style={style.toggle} labelStyle={style.toggleLabelStyle} name="" toggled={this.state.is_banned} onToggle={this.handleChangeToggle.bind(null,"id","is_banned")}/>
                    </div>
                    <div className="col-sm-6">
                      <Toggle label="Prescription Required" labelPosition="right" labelStyle={style.toggleLabelStyle} style={style.toggle} toggled={this.state.prescriptionRequired} onToggle={this.handleChangeToggle.bind(null,"id","prescriptionRequired")}/>
                    </div>
              </div>
              <div className="row">
                    <div className="col-sm-6">
                        <SelectField floatingLabelText="Set minimum stock level" name="minStockValue" value={this.state.minStockValue} onChange={this.handleSelectChange.bind(null,"id","minStockValue")}>
                            {minimumStockList }
                        </SelectField>
                    </div>
                    <div className="col-sm-6">
                        <SelectField floatingLabelText="Pack Form" value={this.state.packForm} fullWidth={true} onChange={this.handleSelectChange.bind(null,"id","packForm")}>
                            <MenuItem value={"packet"} primaryText="Packet" />
                            <MenuItem value={"strip"} primaryText="Strip" />
                            <MenuItem value={"bottle"} primaryText="Bottle" />
                            <MenuItem value={"vial"} primaryText="Vial" />
                            <MenuItem value={"tube"} primaryText="Tube" />
                        </SelectField>
                    </div>
              </div>
              <div className="row">
                    <div className="col-sm-6">
                        <TextField hintText="Search Tags" name="searchTags" floatingLabelText="Search Tags" value={this.state.searchTags} fullWidth={true} />
                    </div>
                    <div className="col-sm-6">

                    </div>
              </div>
          </form>
          </Dialog>

          <ToolbarSeparator style={style.toolBarSeperator}/>
          <ActionSearch/>
          <TextField hintText="Search Inventory">
          </TextField>
          <ToolbarSeparator style={style.toolBarSeperator}/>
          <SelectField floatingLabelText="Filter" style={style.selectBoxStyle} menuStyle={style.selectBoxLableStyle} value={this.state.value} onChange={this.handleChange} >
              <MenuItem value={"showAll"} primaryText="Show All" />
              <MenuItem value={"expired"} primaryText="Expired" />
              <MenuItem value={"outOfStock"} primaryText="Out of Stock" />
              <MenuItem value={"aboutToExpire"} primaryText="About To Expire" />
              <MenuItem value={"closeToOutOfStock"} primaryText="Close to Out of Stock" />
          </SelectField>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
