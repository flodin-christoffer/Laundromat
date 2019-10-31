import React, { Component } from "react";

// const Calender = props => (
class Calender extends Component {
  state = {
    alert: "",
    alertType: "",
    reservations: [
      {
        userName: "chris",
        email: "chris@flo.se",
        id: "Weeknumber:1Day:MondayTimezone:1"
      }
    ]
  };

  //runs on mount
  componentDidMount = async () => {
    // marking checkbox that has reservations ,idea is to present examples of how booked times would look like
    this.state.reservations.forEach(function(item) {
      document.getElementById(item.id).checked = true;
      document.getElementById(item.id).disabled = true;
    });
  };

  // runs when week is changed
  componentDidUpdate(nextProps) {
    if (this.props.week !== nextProps.week) {
      let checkboxes = [];
      // finds all checkboxes
      checkboxes = document.getElementsByTagName("input");

      // clears all
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox") {
          checkboxes[i].checked = false;
          checkboxes[i].disabled = false;
        }
      }
      // marks reservations
      this.state.reservations.forEach(function(item) {
        let box = document.getElementById(item.id);
        if (typeof box != "undefined" && box != null) {
          box.checked = true;
        }
      });

      return true;
    }
    return false;
  }

  // makes a reservation
  makeReservation = e => {
    //reg exp to get week,day,timezone, adding those and user to object laundrytime.
    let result = e.target.id.match(/Weeknumber:(.*)Day:(.*)Timezone:(.*)/);
    const laundryTime = {
      week: result[1],
      day: result[2],
      timeZone: result[3],
      userName: this.props.user.userName,
      email: this.props.user.email,
      id: e.target.id
    };

    // marks checkbox true and , runs addReservation
    if (document.getElementById(e.target.id).checked === true) {
      this.addReservation(laundryTime);
    } else {
      this.removeReservation(laundryTime);
    }
  };

  //adds reservation to reservations[] in state and displays a success alert
  addReservation = async laundryTime => {
    document.getElementById(laundryTime.id).checked = true;
    this.setState({
      alert:
        laundryTime.userName +
        " has made a reservation on " +
        laundryTime.day +
        " week " +
        laundryTime.week,
      alertType: "alert alert-success border-radius"
    });
    setTimeout(() => this.setState({ alert: "" }), 3000);

    //add to state array
    var newStateArray = this.state.reservations.slice();
    newStateArray.push(laundryTime);
    this.setState({ reservations: newStateArray });
  };

  // removes reservation
  removeReservation(laundryTime) {
    this.setState({
      alert: laundryTime.userName + " has taken away his reservation ",
      alertType: "alert alert-removed border-radius"
    });
    setTimeout(() => this.setState({ alert: "" }), 3000);

    //remove from state array
    var newStateArray = this.state.reservations.slice();
    newStateArray.push(laundryTime);
    newStateArray = newStateArray.filter(entry => entry.id !== laundryTime.id);
    this.setState({ reservations: newStateArray });
  }

  render() {
    return (
      // all css classes found in app.css
      <div>
        {/* shows alert if no text is entered */}
        {this.state.alert ? (
          <div className={this.state.alertType}>
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
                    checked={this.state.reservations.checked}
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
                    checked={this.state.reservations.checked}
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
