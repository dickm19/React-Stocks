import React, { Component } from 'react';
import PortfolioStock from '../components/PortfolioStock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.portfolio.map(stockObj => <PortfolioStock sellStock={this.props.sellStock} key={stockObj.id} stock={stockObj}/>)
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
