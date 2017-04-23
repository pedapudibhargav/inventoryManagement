import React from "react";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

export default class AddProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        form:"packet",
        type:"drug",
        label:"",
        availability: true,
        drugForm:"tablet",
        mrp:0,
        prescriptionRequired: false,
        manufacturer:"Roche Products India Pvt Ltd",
        imgUrl:"",
        };
    this.handleChangeToggle = this.handleChangeToggle.bind(this);
  }
  handleChange = (event, index, value) => this.setState({value});
  handleChangeToggle = (event) => {

  }
  render(props) {
    const style = {
      toggle: {
        marginTop:"30px"
      },
      toggleLabelStyle:{
        marginLeft:"20px"
      }
    };
    return (
      <form>
        <div className="row">
          <div className="col-sm-6">
            <TextField hintText="" floatingLabelText="Product Name" name="name"/><br/>
          </div>
          <div className="col-sm-6">
            <TextField hintText="Lable" name="label" floatingLabelText="Label" value={this.state.label}/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
              <SelectField floatingLabelText="Pack Form" name="form" value={this.state.form} onChange={this.handleChange} >
                  <MenuItem value={"packet"} primaryText="Packet" />
                  <MenuItem value={"strip"} primaryText="Strip" />
                  <MenuItem value={"bottle"} primaryText="Bottle" />
                  <MenuItem value={"vial"} primaryText="Vial" />
                  <MenuItem value={"tube"} primaryText="Tube" />
              </SelectField>
          </div>
          <div className="col-sm-6">
              <SelectField floatingLabelText="Drug Form" name="drugForm" value={this.state.drugForm} >
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
      </div>
      <div className="row">
          <div className="col-sm-6">
            <Toggle label="Availability"  labelPosition="right" style={style.toggle} labelStyle={style.toggleLabelStyle} name="availability" toggled={this.state.availability} onToggle={this.handleChangeToggle}/>
          </div>
          <div className="col-sm-6">
            <SelectField floatingLabelText="Type" name="type" value={this.state.type} >
                <MenuItem value={"OTC"} primaryText="OTC" />
                <MenuItem value={"drug"} primaryText="Drug" />
            </SelectField>
          </div>
    </div>
    <div className="row">
          <div className="col-sm-6">
            <TextField hintText="MRP" name="mrp" floatingLabelText="MRP" value={this.state.mrp}/>
          </div>
          <div className="col-sm-6">
            <SelectField floatingLabelText="Manufacturer" name="manufacturer" value={this.state.manufacturer} >
                <MenuItem value={"Roche Products India Pvt Ltd"} primaryText="Roche Products India Pvt Ltd" />
            </SelectField>
          </div>
    </div>
    <div className="row">
          <div className="col-sm-6">
            <Toggle label="Prescription Required" labelPosition="right" labelStyle={style.toggleLabelStyle} name="prescriptionRequired" style={style.toggle} toggled={this.state.prescriptionRequired} onToggle={this.handleChangeToggle}/>
          </div>
          <div className="col-sm-6">
            <TextField hintText="Image URL" name="imgUrl" floatingLabelText="Image URL" value={this.state.imgUrl}/>
          </div>
    </div>
      </form>
    );
  }
}
