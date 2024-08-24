import React, { Component } from "react";
import styles from "../stylesheets/PostsSection.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { BlogSiteContext } from "../store/BlogSiteStore";
import { Link } from "react-router-dom";
 
export default class PostsSection extends Component {
  static contextType = BlogSiteContext;
  render() {
    const { allPosts, fetchPostTitle } = this.context;
    const filteredPosts = this.props.category === "all"? allPosts : allPosts.filter((post) => post.category === this.props.category)
    return (
      <>
        <div className={styles.postsSectionContainer}>
          {filteredPosts.map((post) => (
            <div className={styles.postCard}>
            <div className={styles.postImage} style={{background: `url(${post.url})no-repeat center center / cover`}}></div>
            <p className={styles.postTitle}>{post.title} <span className={styles.postAuthor}> <GrUserManager /> {post.authur}</span> </p>
            <p className={styles.postTags}><span>Tags: </span>{post.tags}</p>
            <p className={styles.postDescription}>
              {post.description.slice(3, 260) + "..."}
            </p>
            <Link to="/readPost" style={{textDecoration: "none"}}><button className={styles.readMoreButton} onClick={() => {fetchPostTitle(post.title)}}>READ MORE <FaArrowRightLong /> </button></Link>
          </div>
          ))}
        </div>
      </>
    );
  }
}
