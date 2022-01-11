import React from "react";

const LogIn = () => {
  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Enter Username" name="uname" required  className="form-control"/>
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          className="form-control"
          required
        />
      </div>
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
      <div>
        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
    </div>
  );
};

export default LogIn;
