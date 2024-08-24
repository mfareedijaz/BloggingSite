import React, { Component } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "../stylesheets/RegistrationModal.module.css";
import Login from "./Login";
import Signup from "./Signup";

export default class RegistrationModel extends Component {
  state = {
    currentPageName: "Sign Up",
    currentPage: "login",
  };

  handleSignUpPage = () => {
    this.setState({
      currentPageName: "Login Page",
      currentPage: "signup",
    });
  }
  
  handleLoginPage = () => {
    this.setState({
      currentPageName: "Sign Up",
      currentPage: "login",
    });
  }

  render() {
    return (
      <>
        <div className={styles.registrationContainer}>
          <div className={styles.registrationForm}>
            <div className={styles.closeButtonContainer}><IoCloseSharp className={styles.closeButton} onClick={() => this.props.toggleForm(false)}/></div>
            <h4>Login to your account</h4>
            <span>You must be logged in to perform this action.</span>
            <p>
              {this.state.currentPage === "signup"? "Go back to " : "Don't have an account? "}<span onClick={this.state.currentPageName === "Sign Up"? this.handleSignUpPage:this.handleLoginPage}>{this.state.currentPageName}</span>
            </p>
            <div>
              {this.state.currentPage === "login" ? (
                <Login></Login>
              ) : (
                <Signup></Signup>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
