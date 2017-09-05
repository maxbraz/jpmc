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

    this.search = this.search.bind(this);
  }

  search (term) {
  }

  render () {
    return (<div>
      <h1>JPMC Bank Search </h1>
      <BankList banks={this.state.banks}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));