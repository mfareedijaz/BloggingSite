import React, { Component } from 'react';
import styles from '../stylesheets/PostContainer.module.css';
import PostsSection from './PostsSection';
import CategoriesSection from './CategoriesSection';

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "all"
    }
  }
  handlePosts = (category) => {
    this.setState({
      currentCategory: category
    })
  }
  render() {
    return (
      <>
        <div className={styles.postsContainer}>
          <PostsSection category={this.state.currentCategory}></PostsSection>
          <CategoriesSection handlePosts={this.handlePosts}></CategoriesSection>
        </div>
      </>
    )
  }
}
