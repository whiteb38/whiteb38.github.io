import React from 'react';

/** Counter button */

class Counter extends React.Component {
  constructor() {
    super();
    this.state= {
      count: 0,
      amount: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleAdd(e){
    let countAdd = this.state.count;
    let amountAdd = this.state.amount;
    let sum = countAdd + amountAdd;
    this.setState({count: sum});
  }
  handleSubtract(e){
    this.setState({count: this.state.count - this.state.amount});
  }
  handleChange(e){
    this.setState({amount: e.target.value});
  }
  render(){
    return(
      <div>
        <a>{this.state.count}</a>
        <form>
          <label>Amount:
            <input type="text" value={this.state.amount} onChange={this.handleChange}/>
          </label>
        </form>
        <div>
          <button onClick={this.handleAdd}>
            +
          </button>
          <button onClick={this.handleSubtract}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
