import React, { Component } from "react";
import styles from "../stylesheets/ViewPosts.module.css";
import { BlogSiteContext } from "../store/BlogSiteStore";
import { Link } from "react-router-dom";

export default class ViewPosts extends Component {
  static contextType = BlogSiteContext;
  render() {
    const { loggedInUser, allPosts, fetchPostTitle, deletePost } = this.context;
    const activeUserPosts = allPosts.filter(
      (post) => post.authur === loggedInUser
    );
    return (
      <>
        <div className={styles.allPostsContainer}>
          <h2 className={styles.allPostsHeading}>All Posts</h2>
          <table className={styles.allPostsTable}>
            <thead>
              <tr>
                <th>Post title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {activeUserPosts.map((post, index) => (
                <tr className={styles.postItem}>
                  <td>{post.title}</td>
                  <td>
                    <Link to="/editPost" style={{textDecoration: "none", color: "white"}} ><button type="button" className={styles.postEditButton} onClick={() => {fetchPostTitle(post.title)}}>Edit</button></Link>
                  </td>
                  <td>
                    <button type="button" className={styles.postDeleteButton} onClick={() => {deletePost(post.title)}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
