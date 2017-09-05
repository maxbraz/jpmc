import React from 'react';

const style = {
  input: {
    width: '256px',
    marginRight: '3px'
  },
  button: {
    backgroundColor: 'green',
  },
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.address);
    this.setState({
      address: ''
    });
  }

  render() {
    return (
    <div>
      <h4>Find a Branch or ATM </h4>
      <input
        placeholder="Search by ZIP code, address, or city and state..."
        style={style.input}
        value={this.state.address}
        onChange={this.onChange}
      />
      <button onClick={this.search} style={style.button}> Search </button>
    </div>
    )
  }
}

export default Search;