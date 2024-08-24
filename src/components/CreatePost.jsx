import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "../stylesheets/CreatePost.module.css";
import { BlogSiteContext } from "../store/BlogSiteStore";

export default class CreatePost extends Component {
  static contextType = BlogSiteContext;

  postTitle = React.createRef();
  postCoverPhotoUrl = React.createRef();
  postDescription = React.createRef();
  postCategory = React.createRef();
  postTags = React.createRef();

  handleNewPost = (event) => {
    event.preventDefault();
    const { addPosts, loggedInUser } = this.context;

    const newPost = {
      authur: loggedInUser,
      title: this.postTitle.current.value,
      url: this.postCoverPhotoUrl.current.value,
      description: this.postDescription.current.getEditor().root.innerHTML,
      category: this.postCategory.current.value,
      tags: this.postTags.current.value,
    };

    try {
      addPosts(newPost);
      this.postTitle.current.value = "";
      this.postCoverPhotoUrl.current.value = "";
      this.postDescription.current.getEditor().root.innerHTML = "";
      this.postCategory.current.value = "";
      this.postTags.current.value = "";
    } catch (error) {
      console.error("Failed to add post", error);
      alert("An error occurred while trying to add a post. Please try again.");
    }
  };

  render() {
    return (
      <>
        <div className={styles.createPostContainer}>
          <form className={styles.createPostForm} onSubmit={this.handleNewPost}>
            <div>
              <div>
                <label className={styles.createPostLabel} htmlFor="title">
                  Post title
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="title"
                  className={styles.createPostInput}
                  ref={this.postTitle}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className={styles.createPostLabel} htmlFor="coverPhoto">
                  Cover photo url
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="coverPhoto"
                  className={styles.createPostInput}
                  ref={this.postCoverPhotoUrl}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  className={styles.createPostLabel}
                  htmlFor="postDescription"
                >
                  Post description
                </label>
              </div>
              <div>
                <div className={styles.createPostDescriptionInput}>
                  <ReactQuill
                    ref={this.postDescription}
                    required
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        [{ size: [] }],
                        ["bold", "italic", "underline", "strike", "blockquote"],
                        [
                          { list: "ordered" },
                          { list: "bullet" },
                          { indent: "-1" },
                          { indent: "+1" },
                        ],
                        ["link", "image"],
                        ["clean"],
                      ],
                    }}
                    formats={[
                      "header",
                      "font",
                      "size",
                      "bold",
                      "italic",
                      "underline",
                      "strike",
                      "blockquote",
                      "list",
                      "bullet",
                      "indent",
                      "link",
                      "image",
                    ]}
                    theme="snow"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label
                  className={styles.createPostLabel}
                  htmlFor="postCategory"
                >
                  Post category
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="postCategory"
                  className={styles.createPostInput}
                  ref={this.postCategory}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className={styles.createPostLabel} htmlFor="postTags">
                  Post tags
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="postTags"
                  className={styles.createPostInput}
                  ref={this.postTags}
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" className={styles.createPostButton}>
                CREATE
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}