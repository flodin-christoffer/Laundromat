import React, { Component } from "react";

// const Calender = props => (
class Calender extends Component {
  // runs on mount
  componentDidMount = async () => {
    // marking checkbox that has reservations
    let id = "Weeknumber:" + 1 + "Day:Monday" + "Timezone:" + 1;
    console.log(id);
    document.getElementById(id).checked = true;
  };

  makeReservation = e => {
    if (document.getElementById(e.target.id).checked == false) {
      if (
        window.confirm(
          "Are you sure you want to let go of this great laundry time?"
        )
      )
        console.log(e.target.id);
    } else {
      if (window.confirm("Are you sure you wish to reserve this laundry time?"))
        console.log(e.target.id);
    }
  };

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
                  id={
                    "Weeknumber:" +
                    this.props.week +
                    "Day:" +
                    day +
                    "Timezone:" +
                    1
                  }
                  onClick={this.makeReservation}
                ></input>
                09:00-12:00
                <input
                  className="checkBox"
                  type="checkbox"
                  value="09:00-12:00"
                  id={
                    "Weeknumber:" +
                    this.props.week +
                    "Day:" +
                    day +
                    "Timezone:" +
                    2
                  }
                  onClick={this.makeReservation}
                ></input>
                12:00-15:00
                <input
                  className="checkBox"
                  type="checkbox"
                  value="12:00-15:00"
                  id={
                    "Weeknumber:" +
                    this.props.week +
                    "Day:" +
                    day +
                    "Timezone:" +
                    3
                  }
                  onClick={this.makeReservation}
                ></input>
                15:00-18:00
                <input
                  className="checkBox"
                  type="checkbox"
                  value="15:00-18:00"
                  id={
                    "Weeknumber:" +
                    this.props.week +
                    "Day:" +
                    day +
                    "Timezone:" +
                    4
                  }
                  onClick={this.makeReservation}
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
