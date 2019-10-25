import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Calender from "./components/Calender";
import Weekend from "./components/Weekend";
import User from "./components/User";
import "./App.css";

class App extends Component {
  state = {
    days: ["Monday", "Tuesday", "Wensday", "Thursday", "Friday"],
    weekEnd: ["Saturday", "Sunday"],
    week: 1,
    user: {
      userName: "",
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
      setTimeout(
        () =>
          this.setState({
            user: {
              userName: name,
              email: email
            }
          }),
        500
      );
    }
  };

  // // booking the time
  // bookTime = async e => {
  //   e.preventDefault();
  //   const time = e.target.elements.value;
  //   const id = e.target.id;
  //   console.log(time, id);
  //   if (!this.state.laundryTime.isBooked) {
  //     console.log("tiden är ledig");
  //     console.log(this.state.laundryTime);
  //     this.setState({
  //       laundryTime: {
  //         isBooked: true,
  //         week: this.state.laundryTime.user.week,
  //         timeZone: this.state.laundryTime.timeZone,
  //         user: this.state.laundryTime.user,
  //         email: this.state.laundryTime.email,
  //         day: this.state.laundryTime.day,
  //         id: 11
  //       }
  //     });
  //   } else {
  //     console.log("tiden är bokad");
  //     console.log(this.state.laundryTime);
  //   }
  // };

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
          {this.state.user.userName.length < 1 ? (
            <User setUser={this.setUser} />
          ) : null}

          {this.state.user.userName.length > 1 ? (
            <div>
              <h1 className="text-center mb-15">
                {" "}
                Welcome {this.state.user.userName}
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
                days={this.state.days}
                week={this.state.week}
                user={this.state.user}
                // bookTime={this.bookTime}
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
