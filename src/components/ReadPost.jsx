import React, { Component } from 'react';
import styles from '../stylesheets/ReadPost.module.css';
import postSecStyles from "../stylesheets/PostsSection.module.css";
import { BlogSiteContext } from '../store/BlogSiteStore';
import { GrUserManager } from "react-icons/gr";

export default class ReadPost extends Component {
  static contextType = BlogSiteContext;
  description = React.createRef();

  componentDidMount() {
    const { postTitle, allPosts } = this.context;
    const targetedPost = allPosts.find((post) => post.title === postTitle);

    if (targetedPost && this.description.current) {
      this.description.current.innerHTML = targetedPost.description;
    }
  }

  render() {
    const { postTitle, allPosts } = this.context;
    const targetedPost = allPosts.filter((post) => post.title === postTitle)
    return (
      <>
        <div className={styles.readPostContainer}>
          <div className={styles.readPostCard}>
            <div className={postSecStyles.postImage} style={{background: `url(${targetedPost[0].url}) no-repeat center center / cover`}}></div>
            <p className={postSecStyles.postTitle}>{targetedPost[0].title} <span className={postSecStyles.postAuthor}> <GrUserManager /> {targetedPost[0].authur}</span> </p>
            <p className={postSecStyles.postTags}><span>Tags: </span>{targetedPost[0].tags}</p>
            <div ref={this.description} className={postSecStyles.postDescription}>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}
