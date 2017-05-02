import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

export default class ProductDetailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render(props) {
    const style = {
      cardHeader: {
        fontSize:"20px"
      }
    };
    var productIn = this.props.product;
    return (
      <Card>
      "name":this.state.productSugList[0].name,
      "manufacturer":this.state.productSugList[0].manufacturer,
      "drug_form":this.state.productSugList[0].drug_form,
      "is_banned": this.state.productSugList[0].is_banned,
      "prescriptionRequired": this.state.productSugList[0].prescriptionRequired,
      "packForm":this.state.productSugList[0].packForm
        <CardTitle title={productIn.name} subtitle={productIn.manufacturer} titleStyle={style.cardHeader} className="text-uppercase"/>
        <Avatar size={100} src={productIn.imgUrl} />
        <CardText>
        <Divider></Divider>
        <Table>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn className="text-capitalize"> <h4>Name</h4> </TableRowColumn>
                <TableRowColumn><p className="lead" >{productIn.name}</p></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="text-capitalize"> <h4>Manufacturer</h4> </TableRowColumn>
                <TableRowColumn>{productIn.manufacturer}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="text-capitalize"> <h4>Drug Forme</h4> </TableRowColumn>
                <TableRowColumn >{productIn.drug_form}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="text-capitalize"> <h4>Is product banned?</h4> </TableRowColumn>
                <TableRowColumn>{productIn.is_banned}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="text-capitalize"> <h4>Prescription required</h4> </TableRowColumn>
                <TableRowColumn>{productIn.prescriptionRequired}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn className="text-capitalize"> <h4>pack form</h4> </TableRowColumn>
                <TableRowColumn>{productIn.packForm}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );
  }
}
