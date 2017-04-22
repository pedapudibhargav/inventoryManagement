import React from 'react';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ProductsListToolBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "showAll",
    };
  }

handleChange = (event, index, value) => this.setState({value});


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
      }
    };
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton
            label="Add Product"
            primary={true}
            icon={<ContentAdd />}
          />
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
