import React, { Component } from "react";

// const Calender = props => (
class Calender extends Component {
  state = {
    alert: ""
  };
  // runs on mount
  componentDidMount = async () => {
    // marking checkbox that has reservations
    let ids = [
      "Weeknumber:1Day:MondayTimezone:1",
      "Weeknumber:1Day:TuesdayTimezone:2",
      "Weeknumber:1Day:WensdayTimezone:3",
      "Weeknumber:1Day:ThursdayTimezone:4"
    ];
    ids.forEach(function(item) {
      document.getElementById(item).checked = true;
      document.getElementById(item).disabled = true;
    });
  };

  makeReservation = e => {
    if (document.getElementById(e.target.id).checked === false) {
      if (
        window.confirm(
          "Are you sure you want to let go of this great laundry time?"
        )
      )
        console.log(e.target.id);
    } else {
      if (window.confirm("Are you sure you wish to reserve this laundry time?"))
        console.log(e.target.id);

      //reg ex to get week,day,timezone
      let result = e.target.id.match(/Weeknumber:(.*)Day:(.*)Timezone:(.*)/);
      const laundryTime = {
        week: result[1],
        day: result[2],
        timeZone: result[3],
        userName: this.props.user.userName,
        email: this.props.user.email,
        id: e.target.id
      };
      this.paintReservation(laundryTime);
    }
  };

  paintReservation(laundryTime) {
    document.getElementById(laundryTime.id).checked = true;
    this.setState({
      alert: laundryTime.userName + " has made a reservation "
    });
    setTimeout(() => this.setState({ alert: "" }), 8000);
  }

  render() {
    return (
      // all css classes found in app.css
      <div>
        {/* shows alert if no text is entered */}
        {this.state.alert ? (
          <div className="alert alert-success border-radius">
            <i className="fas fa-info-circle"></i> {this.state.alert}
          </div>
        ) : null}
        <div className="grid-5">
          {this.props.days.map(day => {
            return (
              <div
                key={day}
                className="card text-center border-radius scaleCard"
              >
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
      </div>
      // );
    );
  }
}

export default Calender;
