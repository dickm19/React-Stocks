import React, {Component} from 'react'

export default class Stock extends Component {


  // state = {
  //   bought: false
  // }
  handleCardClick = () => {
    // return this.setState({
    //   bought: !this.state.bought
    // })
    // , () => this.state.bought ? 
    this.props.buyStock(this.props.stock)
    // : console.log(this.state.bought))
    
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


