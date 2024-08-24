import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from '../stylesheets/PostsSlider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { BlogSiteContext } from '../store/BlogSiteStore';

export default class PostsSlider extends Component {
  static contextType = BlogSiteContext;
  render() {
    const { allPosts } = this.context;
    const latestPosts = allPosts.reverse()
    return (
      <>
        <div className={styles.postsSliderContainer}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {latestPosts.map((post, index) => (
              <SwiperSlide key={index}>
              <div className={styles.postContainer}>
                <div className={styles.postImage} style={{background: `url(${post.url}) no-repeat center center / cover`}}></div>
                <div className={styles.postTitle}>{post.title}</div>
                <div className={styles.postCategory}>{post.category}</div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    )
  }
}
