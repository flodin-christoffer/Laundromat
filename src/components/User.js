import React from "react";

const User = props => (
  <form className="form mb-15" onSubmit={props.setUser}>
    <h4>Start with entering name and email</h4>
    <div className="grid-2">
      <input
        className=" border-radius"
        type="text"
        name="userName"
        placeholder="Your name is..."
      />
      <input
        className=" border-radius"
        type="email"
        name="email"
        placeholder="Your email is..."
      />
    </div>

    <input
      type="submit"
      value="Login"
      className="btn btn-block border-radius"
    />
  </form>
);

export default User;
