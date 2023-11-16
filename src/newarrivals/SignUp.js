import React, { Component } from 'react'
import "./loginpage.css";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3 className='padclss'>Sign Up</h3>

        <div className="mb-3 padclss">
          <label>First name</label>
          <input
            type="text"
            className="form-control inputclass"
            placeholder="First name"
          />
        </div>

        <div className="mb-3 padclss">
          <label>Last name</label>
          <input type="text" className="form-control inputclass" placeholder="Last name" />
        </div>

        <div className="mb-3 padclss">
          <label>Email address</label>
          <input
            type="email"
            className="form-control inputclass"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3 padclss">
          <label>Password</label>
          <input
            type="password"
            className="form-control inputclass"
            placeholder="Enter password"
          />
        </div>
        
        <div className="mb-3 padclss">
          <label>Confirm Password</label><br></br>
          <input
            type="password"
            className="form-control inputclass"
            placeholder="Confirm password"
          />
        </div>

        <div className="d-grid padclss">
          <button type="submit" className="btn btn-primary btnbox1">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/LoginComponent">Sign In?</a>
        </p>
      </form>
    )
  }
}
