import React from "react";

const Weekend = props => (
  // all css classes found in app.css
  <div className="grid-2">
    {props.weekEnd.map(day => {
      return (
        <div
          key={day}
          className="card text-center border-radius scaleCard bg-dark"
        >
          <h2 className="mb-15"> {day} </h2>
          <h4 className="text-center mb-10">
            Sorry no booking available today.
          </h4>
          <h4>Have a nice weekend</h4>
        </div>
      );
    })}
  </div>
);

export default Weekend;
