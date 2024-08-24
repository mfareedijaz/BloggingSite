import React, { Component } from "react";
import Navbar from "./components/Navbar";
import RegistrationModel from "./components/RegistrationModel";
import BlogSiteContextProvider, {
  BlogSiteContext,
} from "./store/BlogSiteStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Home from "./components/Home";
import EditPost from "./components/EditPost";
import ReadPost from "./components/ReadPost";

export default class App extends Component {
  state = {
    showForm: false,
  };

  toggleForm = (boolean) => {
    this.setState({
      showForm: boolean,
    });
  };

  render() {
    return (
      <BlogSiteContextProvider>
        <BrowserRouter>
          <Navbar toggleForm={this.toggleForm}></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/post" element={<Post></Post>}></Route>
            <Route path="/editPost" element={<EditPost></EditPost>}></Route>
            <Route path="/readPost" element={<ReadPost></ReadPost>}></Route>
          </Routes>
          {this.state.showForm === false ? (
            ""
          ) : (
            <RegistrationModel toggleForm={this.toggleForm}></RegistrationModel>
          )}
        </BrowserRouter>
      </BlogSiteContextProvider>
    );
  }
}
