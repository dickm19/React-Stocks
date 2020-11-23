import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  state = {
    stocks: [],
    portfolio: [],
    selection: ["Tech", 'Finance', 'Sportswear' ]
  }
  componentDidMount(){
    return fetch("http://localhost:3000/stocks").then(resp => resp.json()).then(data => this.setState({
      stocks: data
    }))
  }
  compareName(a, b) {
    const stockA = a.name.toUpperCase();
    const stockB = b.name.toUpperCase();
  
    let comparison = 0;
    if (stockA > stockB) {
      comparison = 1;
    } else if (stockA < stockB) {
      comparison = -1;
    }
    return comparison;
  }
  comparePrice = (a,b) => {
    const stockA = a.price
    const stockB = b.price
  
    let comparison = 0;
    if (stockA > stockB) {
      comparison = 1;
    } else if (stockA < stockB) {
      comparison = -1;
    }
    return comparison;
  }

  sortAlpha = () => {
    const newArray = [...this.state.stocks]
    newArray.sort(this.compareName)
    return this.setState({
      stocks: newArray
    })
  }

  sortPrice = () => {
    const newArray = [...this.state.stocks]
    console.log(newArray)
    newArray.sort((a,b) =>  b.price - a.price)
    return this.setState({
      stocks: newArray
    })
  }

  sellStock = (stockObj) => {
    const newPortfolioArr = [...this.state.portfolio]
    const idx = newPortfolioArr.findIndex(stock => stock.name === stockObj.name)
    newPortfolioArr.splice(idx, 1)
    return this.setState({
      portfolio: newPortfolioArr
    })
  }
  buyStock = (stock) => {
    const newPortfolio = [...this.state.portfolio, stock]
    return this.setState({
      portfolio: newPortfolio
    })
  }
  filter = (selection) => {
    this.setState({
      selection: [selection]
    })
  }

  filteredStocks = () => {
    return this.state.stocks.filter(stock => this.state.selection.includes(stock.type))
  }
  render() {
    return (
      <div>
        <SearchBar filter={this.filter} sortPrice={this.sortPrice} sortAlpha={this.sortAlpha} />

          <div className="row">
            <div className="col-8">

              <StockContainer buyStock={this.buyStock} stocks={this.filteredStocks()} />

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
