import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      text: ''
    }
  }

  componentDidMount() {
    this.getSampleText()
  }


  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&start-with-lorem=1&format=text')
      .then((response) => {
        this.setState({text: response.data}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return(
      <div className="App">
      <Output value={this.state.text} />
       
      </div>
    )
  }
}

export default App;