import React, { Component } from "react";
import Carousel from "./Carousel";
import PostsSlider from "./PostsSlider";
import PostContainer from "./PostContainer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel></Carousel>
        <PostsSlider></PostsSlider>
        <PostContainer></PostContainer>
      </>
    );
  }
}
