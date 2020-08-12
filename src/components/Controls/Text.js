import React, { Component } from 'react';


class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value}, function() {
            this.props.onChange(this.state.value)
        })
    }

    render() {
        return (
            <div>
            <input className="form-control ml-2" type="number" min="1" max="100" value={this.state.value} onChange={this.onChange.bind(this)}/>
            </div>
        )
    }
}



export default Text;
