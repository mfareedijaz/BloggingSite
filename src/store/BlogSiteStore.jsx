import React, { Component, createContext } from "react";

export const BlogSiteContext = createContext(null);

class BlogSiteContextProvider extends Component {
  constructor(props) {
    super(props);
    let getUsers = localStorage.getItem("users");
    let getPosts = localStorage.getItem("posts");
    let getLoggedInUser = localStorage.getItem("loggedInUser");
    getUsers = JSON.parse(getUsers);
    getPosts = JSON.parse(getPosts);
    this.state = {
      loggedInUser: getLoggedInUser == null ? "" : getLoggedInUser,
      users: getUsers == null ? [] : getUsers,
      posts: getPosts == null ? [] : getPosts,
      postTitle: "",
    };
    console.log(getLoggedInUser, getUsers, getPosts, this.state.postTitle);
  }

  addUsers = (user) => {
    const newUser = this.state.users.find((u) => u.email === user.email);
    if (newUser) {
      alert("User already exists!");
    } else {
      this.setState((prevState) => ({
        users: [...prevState.users, user],
      }));
    }
  };

  fetchPostTitle = (title) => {
    this.setState({
      postTitle: title,
    });
  };

  addPosts = (post) => {
    this.setState((prevState) => ({
      posts: [...prevState.posts, post],
    }));
  };

  editPost = (post, index) => {
    const updatedPosts = [...this.state.posts];
    updatedPosts.splice(index, 1, post);
    this.setState({
      posts: updatedPosts,
    });
  };

  deletePost = (post) => {
    const updatedPosts = this.state.posts.filter((p) => p.title !== post);
    this.setState({
      posts: updatedPosts,
    });
  };

  authenticateUsers = (email, password) => {
    this.state.users.map((user) => {
      if (user.email === email && user.password === password) {
        this.setState({
          loggedInUser: user.name,
        });
        localStorage.setItem("loggedInUser", user.name);
      }
    });
  };

  updateLoggedInUserState = (user) => {
    this.setState({
      loggedInUser: user,
    });
    localStorage.setItem("loggedInUser", user);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users != this.state.users) {
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
    if (prevState.posts != this.state.posts) {
      localStorage.setItem("posts", JSON.stringify(this.state.posts));
    }
  }

  render() {
    return (
      <BlogSiteContext.Provider
        value={{
          addUsers: this.addUsers,
          addPosts: this.addPosts,
          loggedInUser: this.state.loggedInUser,
          authenticateUsers: this.authenticateUsers,
          updateLoggedInUserState: this.updateLoggedInUserState,
          allPosts: this.state.posts,
          fetchPostTitle: this.fetchPostTitle,
          postTitle: this.state.postTitle,
          editPost: this.editPost,
          deletePost: this.deletePost,
        }}
      >
        {this.props.children}
      </BlogSiteContext.Provider>
    );
  }
}

export default BlogSiteContextProvider;