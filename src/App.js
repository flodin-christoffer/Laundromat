import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Calender from "./components/Calender";
import Weekend from "./components/Weekend";
import User from "./components/User";
import "./App.css";

class App extends Component {
  state = {
    calender: {
      week: ["Monday", "Tuesday", "Wensday", "Thursday", "Friday"],
      weekNumber: 1,
      timeZones: [
        "06:00-09:00 ",
        "09:00-12:00 ",
        "12:00-15:00 ",
        "15:00-18:00 "
      ]
    },
    weekEnd: ["Saturday", "Sunday"],
    week: 1,
    laundryTime: {
      id: 0,
      week: 1,
      timeZone: "",
      isBooked: false,
      user: "",
      email: ""
    },
    alert: ""
  };

  // Set the user upon first entering the page
  setUser = async e => {
    e.preventDefault();
    const name = e.target.elements.userName.value;
    const email = e.target.elements.email.value;
    //making sure input is okay.
    if (name === "" || email === "") {
      this.setState({ alert: "Please enter name and email" });
      setTimeout(() => this.setState({ alert: "" }), 5000);
    } else {
      console.log("din användare heter " + name + email);
      setTimeout(
        () =>
          this.setState({
            laundryTime: {
              isBooked: false,
              week: 1,
              timeZone: "",
              user: name,
              email: email
            }
          }),
        500
      );
    }
  };

  // booking the time
  bookTime = async e => {
    e.preventDefault();
    const time = e.target.elements.value;
    const id = e.target.id;
    console.log(time, id);
    if (!this.state.laundryTime.isBooked) {
      console.log("tiden är ledig");
      console.log(this.state.laundryTime);
      this.setState({
        laundryTime: {
          isBooked: true,
          week: this.state.laundryTime.user.week,
          timeZone: this.state.laundryTime.timeZone,
          user: this.state.laundryTime.user,
          email: this.state.laundryTime.email
        }
      });
    } else {
      console.log("tiden är bokad");
      console.log(this.state.laundryTime);
    }
  };

  // making sure only one checkbox is checked
  selectOnlyThis = async e => {
    const id = e.target.id;
    const day = e.target.name;
    console.log(id);
    document.getElementById(id).checked = true;
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/* shows alert if no text is entered */}
          {this.state.alert ? (
            <div className="alert alert-light border-radius">
              <i className="fas fa-info-circle"></i> {this.state.alert}
            </div>
          ) : (
            <span></span>
          )}
          {this.state.laundryTime.user.length < 1 ? (
            <User setUser={this.setUser} />
          ) : null}

          {this.state.laundryTime.user.length > 1 ? (
            <div>
              <h1 className="text-center mb-15">
                {" "}
                Welcome {this.state.laundryTime.user}
              </h1>
              <h1 className="text-center mb-10">
                <i
                  className="fas fa-arrow-left mr-15"
                  onClick={() => {
                    this.state.week <= 1
                      ? this.setState({
                          week: this.state.week
                        })
                      : this.setState({
                          week: this.state.week - 1
                        });
                  }}
                ></i>
                Week {this.state.week}{" "}
                <i
                  className="fas fa-arrow-right ml-5"
                  onClick={() =>
                    this.setState({
                      week: this.state.week + 1
                    })
                  }
                ></i>
              </h1>

              <Calender
                calender={this.state.calender}
                week={this.state.week}
                laundryTime={this.state.laundryTime}
                bookTime={this.bookTime}
                selectOnlyThis={this.selectOnlyThis}
              />

              <Weekend weekEnd={this.state.weekEnd} />
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
