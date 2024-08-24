import React, { Component } from 'react'
import styles from '../stylesheets/LeftNav.module.css'
import { RiAddLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

export default class LeftNav extends Component {
  render() {
    return (
      <>
        <div className={styles.leftNavContainer}>
          <ul className={styles.leftNav}>
            <li className={styles.leftNavItems} onClick={() => {this.props.handlePostComponentState(true)}}><i className="fa-solid fa-plus"></i>NEW POST</li>
            <li className={styles.leftNavItems} onClick={() => {this.props.handlePostComponentState(false)}}><FaRegEye />VIEW POSTS</li>
          </ul>
        </div>
      </>
    )
  }
}
