import React, { Component } from "react";
import styles from "../stylesheets/Login.module.css";
import { BlogSiteContext } from "../store/BlogSiteStore";

export default class Login extends Component {
  static contextType = BlogSiteContext;

  email = React.createRef();
  password = React.createRef();

  handleUserLogin = (event) => {
    event.preventDefault();
    const { authenticateUsers } = this.context;
    try {
      authenticateUsers(this.email.current.value, this.password.current.value);
      this.email.current.value = "";
      this.password.current.value = "";
    } catch (error) {
      console.error("Failed to  login", error);
      alert("An error occurred while trying to login. Please try again.");
    }
  };

  render() {
    return (
      <>
        <form className={styles.loginForm} onSubmit={this.handleUserLogin}>
          <div>
            <input type="email" ref={this.email} placeholder="Email Address" required/>
          </div>
          <div>
            <input type="password" ref={this.password} placeholder="Password" required  />
          </div>
          <div>
            <button type="submit">Continue</button>
          </div>
        </form>
      </>
    );
  }
}
