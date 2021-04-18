import React from 'react'
import '../css/Post.css';
import FormComment from './FormComment';

const Post = () => {
  return (
    <div className="post">
      <header className="post_user_info">
        <img className="user_rounded_icon" src="assets/rounded-icon.svg" alt=""/>
        <p className="username_post">nome_utente</p>
        <img className="dots_icon" src="assets/dots.svg" alt=""/>
      </header>
      <div className="post_image">
        <img src="https://images.unsplash.com/photo-1618501487720-e3f043c1a736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80" alt=""/>
      </div>
      <div className="post_interactions">
        <section className="reactions">
          <div className="reactions_left">
            <img src="assets/heart.svg" alt="" />
            <img src="assets/chat.svg" alt=""/>
            <img src="assets/paper.svg" alt=""/>
          </div>
          <img className="marker_icon" src="assets/marker.svg" alt=""/>
        </section>
        <section className="like">
          <img className="like_rounded_icon" src="assets/rounded-icon.svg" alt=""/>
          Liked by
          <span className="first_like_user">username</span>
          and
          <span className="post_number_likes">10,000 others</span>
        </section>
        <section className="user_post_description">
          <p><span className="username">username</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsa dignissimos officia exercitationem. Repudiandae, excepturi beatae, dolores illo maiores natus quia nobis nam praesentium culpa id in fugit corporis libero.</p>
        </section>
        <div className="comments">
        </div>
        <section className="post_datetime">
        </section>
       <FormComment />
      </div>
    </div>
  )
}

export default Post
