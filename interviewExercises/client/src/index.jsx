import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import BankList from './components/BankList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banks: []
    }
    this.fetch = this.fetch.bind(this);
    this.search = this.search.bind(this);
  }

  search(address) {
    let coordinates;
    axios.post('/address', {
      address: address
    })
    .then(function(response) {
      coordinates = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetch(coordinates);
  }

  fetch(coordinates) {
    let fetchedBanks;

    axios.get('/banks', {
      params: {
        coordinates: coordinates
      }
    })
    .then(function (response) {
      fetchedBanks = response.data;
      this.setState({banks: fetchedBanks})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>JPMC Bank Search </h1>
      <Search onSearch={this.search}/>
      <BankList banks={this.state.banks}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));