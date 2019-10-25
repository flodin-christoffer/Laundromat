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

  // Sets the user upon first entering the page, username, email
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
          ) : null}

          {/* hides pages if no user is logged in  */}
          {this.state.user.userName.length < 1 ? (
            <User setUser={this.setUser} />
          ) : null}

          {this.state.user.userName.length > 1 ? (
            <div>
              <h1 className="text-center mb-15">
                {" "}
                Welcome {this.state.user.userName}
              </h1>
              <h4 className="text-center mb-10">
                Select a week and day then click to make a reservation
              </h4>
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
                  onClick={() => {
                    this.state.week >= 52
                      ? this.setState({
                          week: this.state.week
                        })
                      : this.setState({
                          week: this.state.week + 1
                        });
                  }}
                ></i>
              </h1>
              {/* Displays the days and times for booking */}
              <Calender
                days={this.state.days}
                week={this.state.week}
                user={this.state.user}
              />
              {/* Displays the weekend days */}
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
