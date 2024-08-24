import React, { Component } from 'react'
import LeftNav from './LeftNav'
import CreatePost from './CreatePost';
import ViewPosts from './ViewPosts';
import styles from '../stylesheets/Post.module.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createPostComponent: true,
    }
  }

  handlePostComponentState = (boolean) => {
    this.setState({
      createPostComponent: boolean
    })
  }

  render() {
    return (
      <>
        <div className={styles.postContainer}>
          <LeftNav handlePostComponentState={this.handlePostComponentState}></LeftNav>
          {this.state.createPostComponent === true? <CreatePost></CreatePost> : <ViewPosts></ViewPosts>}
        </div>
      </>
    )
  }
}
