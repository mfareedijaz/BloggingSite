import React, { Component } from "react";
import styles from "../stylesheets/CategoriesSection.module.css";
import { BlogSiteContext } from "../store/BlogSiteStore";

export default class CategoriesSection extends Component {
  static contextType = BlogSiteContext;
  render() {
    const { allPosts } = this.context;
    let postCategories = allPosts.map((post) => (post.category));
    postCategories = [...new Set(postCategories)];
    return (
      <>
        <div className={styles.categoriesSection}>
          <div className={styles.categoriesHeading}>
            <h3>Categories</h3>
          </div>
            <div className={styles.categories} onClick={() => {this.props.handlePosts("all")}}>
                All
            </div>
          {postCategories.map((category) => (
            <div className={styles.categories} onClick={() => {this.props.handlePosts(category)}}>
              {category}
            </div>
          ))}
        </div>
      </>
    );
  }
}
