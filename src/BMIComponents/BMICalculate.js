import React ,{Component} from 'react';
import "./style.css";


class BMICalculate extends React.Component {
    constructor() {
      super();
      this.state = {
        height: "",
        weight: "",
        bmi: "",
        msg: ""
      };
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    calculateBMI = () => {
      let heightSq = (this.state.height / 100) * (this.state.height / 100);
      let bmi = this.state.weight / heightSq;
      let msg = "";
      if (bmi < 18.5) {
        msg = "under Weight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        msg = "Normal Weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
        msg = "Over Weight";
      } else if (bmi >= 30) {
        msg = "Obesity";
      }
      this.setState({ msg: msg });
      this.setState({ bmi: Math.round(bmi * 100) / 100 });
    };
  
    handleSubmit = (e) => {
      this.calculateBMI();
      e.preventDefault();
    };
  
    render() {
      return (
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <h2> BMI calculator </h2>
            <div>
              <label>Height(cm)</label>
              <input
                type="number"
                value={this.state.height}
                name="height"
                onChange={this.handleChange}
              />
            </div>
  
            <div>
              <label>Weight</label>
              <input
                type="number"
                value={this.state.weight}
                name="weight"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Submit</button>
            <h2> {this.state.bmi} </h2>
            <h2> {this.state.msg} </h2>
          </form>
        </div>
      );
    }
  }
  export default BMICalculate;