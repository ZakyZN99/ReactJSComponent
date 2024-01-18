import React from 'react';

//const  nama = "Zaky";
class ClassComponent extends React.Component{
    constructor(probs){
        super(probs);
        this.state = {
            value : 0
        }
        this.buttonPlus = this.buttonPlus.bind(this);
        this.buttonMin = this.buttonMin.bind(this);
    }
    buttonPlus(){
        this.setState({value: this.state.value + 1})
    }
    buttonMin(){
        this.setState({value: this.state.value - 1})
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <h2>{this.props.nama} disini</h2>
                <button onClick={this.buttonMin}>-</button>
                <span>{' '} {this.state.value}{' '}</span>
                <button onClick={this.buttonPlus}>+</button>
            </div>
        )
    }
}
export default ClassComponent;