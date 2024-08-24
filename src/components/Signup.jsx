import React, { Component } from "react";
import styles from "../stylesheets/Signup.module.css";
import { BlogSiteContext } from "../store/BlogSiteStore";

export default class Signup extends Component {
  static contextType = BlogSiteContext;

  userName = React.createRef();
  userEmail = React.createRef();
  userPassword = React.createRef();
  userConfirmPassword = React.createRef();

  handleNewUser = (event) => {
    event.preventDefault();
    const { addUsers } = this.context;

    if (this.userPassword.current.value === this.userConfirmPassword.current.value) {
      const newUser = {
        name: this.userName.current.value,
        email: this.userEmail.current.value,
        password: this.userPassword.current.value,
      };

      try {
        addUsers(newUser);
        this.userName.current.value = "";
        this.userEmail.current.value = "";
        this.userPassword.current.value = "";
        this.userConfirmPassword.current.value = "";
      } catch (error) {
        console.error("Failed to add user", error);
        alert("An error occurred while trying to register the user. Please try again.");
      }
    } else {
      alert("Your password doesn't match with your confirm password");
    }
  };

  render() {
    return (
      <form className={styles.SignupForm} onSubmit={this.handleNewUser}>
        <div>
          <input
            type="text"
            placeholder="Name"
            ref={this.userName}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            ref={this.userEmail}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            ref={this.userPassword}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            ref={this.userConfirmPassword}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }
}