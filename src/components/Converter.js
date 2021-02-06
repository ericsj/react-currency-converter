import React, { Component } from "react";

export default class Converter extends Component {
    constructor(props){
        super(props);
        this.state = {
            currencyA_value:"",
            currencyB_value:0,
        }
        this.convert = this.convert.bind(this);
    }
    convert() {
        let from_to = `${this.props.currencyA}_${this.props.currencyB}`;
        let url = `https://api.hgbrasil.com/finance`
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            console.log(json)
            // let quotation = json[from_to].val;
            // let currencyB_value = (parseFloat(this.state.currencyA_value) * quotation.toFixed(2));
            // this.setState({currencyB_value})
        })
    }
    render() {
        return (
            <div className="Converter">
                <h1>{this.props.currencyA} to {this.props.currencyB}</h1>
                <input type="text" onChange={(event)=>{this.setState({currencyA_value:event.target.value})}}></input>
                <input type="button" value="Convert" onClick={this.convert}></input>
                <p>{this.state.currencyB_value}</p>
            </div>
        )
    }
}