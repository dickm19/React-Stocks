import React, {Component} from 'react'

export default class PortfolioStock extends Component {

    // state = {
    //     bought: true
    // }
  handleCardClick = () => {
    //   return this.setState({
    //       bought: !this.state.bought
    //   }), () => this.state.bought ? console.log(this.state.bought) : 
    this.props.sellStock(this.props.stock)
      
    
  }
  render() {
    
    return (
      <div>
        <div  className="card">
          <div onClick={this.handleCardClick} className="card-body">
            <h5 className="card-title">
            {this.props.stock.name}
            </h5>
            <p className="card-text">
              {this.props.stock.ticker}: {this.props.stock.price}
            </p>
          </div>
        </div>
    
      </div>
    )
  }
};


