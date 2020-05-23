import React, { Component } from 'react';


class MonthlyPay extends Component {
  state = {
    cost: 0,
    houseCost: 0,
    downPayment: 0,
    termOfLoan: 0,
    annualInterestRate: 0,
    totalPayment: 0
  }
  handleHouseCostChange = (e) => {
    this.setState({
      houseCost: e.target.value,
    });
  }

  handleDownPayment = (e) => {
    this.setState({
      downPayment: e.target.value,
    });
  }

  handleannualInterestRate = (e) => {
    this.setState({
      annualInterestRate: e.target.value,
    });
  }

  handleTermOfLoan = (e) => {
    this.setState({
      termOfLoan: e.target.value,
    });
  }
  handleCostChange = () => {
    const { houseCost, downPayment, termOfLoan, annualInterestRate } = this.state;
    const principal = houseCost - downPayment
    const lengthOfLoan = 12 * termOfLoan;
    const percentageRate = annualInterestRate / 1200
    const cost = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate), lengthOfLoan * -1))).toString();
    const totalPayment = cost * lengthOfLoan;
    this.setState({
      cost: cost.toFixed(2),
      totalPayment: totalPayment.toFixed(2)
    })
  }
  render() {
    return (
      <div>
      <div>
        <h2 className="text-center m-5">Real Estate Calculator</h2>
      </div>
      <div className="counter">
        <div className="m-5">
          <div className="p-2">
            <span className="counter-score">House Cost $:</span><br />
            <input type="number" placeholder="House Cost" onChange={(e) => this.handleHouseCostChange(e)}></input>
          </div>
          <div className="p-2">
            <span className="counter-score">Down Payment $:</span><br />
            <input type="number" placeholder="Down Payment" onChange={(e) => this.handleDownPayment(e)}></input>
          </div>
          <div className="p-2">
            <span className="counter-score">Mortgage Period(years):</span><br />
            <input type="number" placeholder="Mortgage Period" onChange={(e) => this.handleTermOfLoan(e)}></input>
          </div>
          <div className="p-2">
            <span className="counter-score">Interest Rate %:</span><br />
            <input type="number" placeholder="Interest Rate" onChange={(e) => this.handleannualInterestRate(e)}></input>
          </div>
        </div>
        <div className="m-5">
          <div className="m-4 text-center">
            <p style={{ fontSize: 18 }}>Monthly Payments:</p>
            <p style={{ fontSize: 25, color: "red" }}>{this.state.cost}$</p>
            <p style={{ fontSize: 18 }}>Total Payment:</p>
            <p style={{ fontSize: 25, color: "red" }}>  {this.state.totalPayment}$</p>
            <button className="btn btn-primary m-3" onClick={this.handleCostChange}>Calculate</button>

          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default MonthlyPay;