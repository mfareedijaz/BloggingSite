import React, { Component } from 'react'
import { VscAccount } from "react-icons/vsc";
import styles from '../stylesheets/Navbar.module.css';
import { Link } from 'react-router-dom';
import { BlogSiteContext } from '../store/BlogSiteStore';
import { AiOutlineLogout } from "react-icons/ai";

export default class Navbar extends Component {
  static contextType = BlogSiteContext;
  render() {
    const { loggedInUser, updateLoggedInUserState } = this.context;
    return (
      <>
        <div className={styles.navbarContainer}>
          <div className={styles.siteLogo}>Sensive</div>
          <div className={styles.menuItemsContainer}>
            <ul>
              <li><Link to="/" style={{textDecoration: "none", color: "black"}}>HOME</Link></li>
              {loggedInUser === ""? <li onClick={() => {alert("Please log in to write a blog post.")}}>POST</li> : <li><Link to="/post" style={{textDecoration: "none", color: "black"}}>POST</Link></li>}
            </ul>
          </div>
          <div className={styles.accountsContainer}>
            <VscAccount className={styles.loginButton} onClick={() => this.props.toggleForm(true)}/>
            <Link to="/"><AiOutlineLogout style={{textDecoration: "none", color: "black"}} className={styles.loginButton} onClick={() => updateLoggedInUserState("")}/></Link>
          </div>
        </div>
      </>
    )
  }
}