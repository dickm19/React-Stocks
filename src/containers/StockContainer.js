import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  renderStocks = () => {
    return this.props.stocks.map(stockObj => <Stock buyStock={this.props.buyStock} key={stockObj.id} stock={stockObj}/>)
  }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
