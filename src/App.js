import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentDidMount() {
    this.getSampleText()
  }


  getSampleText() {
    axios.get('http://hispterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
    .then((response) => {
      this.setState({text: response.data.text}, function() {
        console.log(this.state);
      })
    })
  }

  render() {
    return(
      <div className="app">
        <h1>App</h1>
      </div>
    )
  }
}

export default App;