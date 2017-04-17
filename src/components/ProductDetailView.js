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
        <CardTitle title={productIn.name} subtitle={productIn.manufacturer} titleStyle={style.cardHeader}/>
        <Avatar size={100} src="http://www.crocin.com/content/dam/global/panadol/en_IN/418x418/crocin-advance-medicine.png" />
        <CardText>
        <Divider></Divider>
        <Table>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>Product Id</TableRowColumn>
                <TableRowColumn>{productIn.pId}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Unit Price</TableRowColumn>
                <TableRowColumn>{productIn.uPrice}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Pack Price</TableRowColumn>
                <TableRowColumn>{productIn.oPrice}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Pack Size</TableRowColumn>
                <TableRowColumn>{productIn.packSize}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>Drug Form</TableRowColumn>
                <TableRowColumn>{productIn.drug_form}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );
  }
}
