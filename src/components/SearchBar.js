import React from 'react';

class SearchBar extends React.Component {
  filter = (e) => {
    this.props.filter(e.target.value)
  }
  render(){
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={null} onChange={this.props.sortAlpha}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={null} onChange={this.props.sortPrice}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.filter}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );

  }
}


export default SearchBar;
