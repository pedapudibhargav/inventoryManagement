import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render(props) {
    const style = {
      menuWrapper: {
      }
    };
    var productsIn = this.props.products;
    return (
      <Table onRowSelection={(index) => {
        this.props.onProductClick(productsIn[index]);
        console.log(JSON.stringify(productsIn[index]));
      }}>
        <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>In stock </TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody >
          {productsIn.map((product, index) =>
            <TableRow key={index} >
              <TableRowColumn>{product.name}</TableRowColumn>
              <TableRowColumn>2</TableRowColumn>
            </TableRow>
          )}

        </TableBody>
      </Table>
    );
  }
}
