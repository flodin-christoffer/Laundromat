import React, { Component } from "react";

// const Calender = props => (
class Calender extends Component {
  // runs on mount
  componentDidMount = async () => {
    // marking checkbox that has reservations
    let id = 1 + "Monday" + 1;
    console.log(id);
    document.getElementById(id).checked = true;
  };

  makeResevation() {
    if (window.confirm("Are you sure you wish to reserve this laundry time?"))
      console.log("reservation made");
  }

  render() {
    return (
      // all css classes found in app.css
      <div className="grid-5">
        {this.props.days.map(day => {
          return (
            <div key={day} className="card text-center border-radius scaleCard">
              <h2 className="mb-15"> {day} </h2>

              <h4 className="text-left mb-10 grid-2">
                06:00-09:00{" "}
                <input
                  className="checkBox"
                  type="checkbox"
                  value="06:00-09:00"
                  id={this.props.week + day + 1}
                ></input>
                09:00-12:00
                <input
                  className="checkBox"
                  type="checkbox"
                  value="09:00-12:00"
                  id={this.props.week + day + 2}
                  onClick={this.makeResevation}
                ></input>
                12:00-15:00
                <input
                  className="checkBox"
                  type="checkbox"
                  value="12:00-15:00"
                  id={this.props.week + day + 3}
                  // onClick={props.selectOnlyThis}
                ></input>
                15:00-18:00
                <input
                  className="checkBox"
                  type="checkbox"
                  value="15:00-18:00"
                  id={this.props.week + day + 4}
                  // onClick={props.selectOnlyThis}
                ></input>
              </h4>
            </div>
          );
        })}
      </div>
      // );
    );
  }
}

export default Calender;
