import React, { Component } from 'react';
import './App.css';
import Output from './components/Output';
import Text from './components/Controls/Text';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4
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


  changeParas(number) {
    this.setState({paras: number}, this.getSampleText());
  }

  render() {
    return(
      <div className="App container">
      <h1 className="text-center mt-3">Text Generator</h1>
      <hr/>
      <form className="form-inline">
      <div className="form-group">
        <label>Paragraphs: </label>
        <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
      </div>

      </form>

      <br/><br/>
      <Output value={this.state.text} />
      </div>
    )
  }
}

export default App;