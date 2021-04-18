import React from 'react'
import '../css/Main.css';
import Stories from './Stories';
import Post from './Post';

const Main = ({stories}) => {
  return (
    <main className="main">
      <section className="feed_container">
        <Stories stories={stories}/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </section>
      <section className="suggestion_container"></section>
    </main>
  )
}

export default Main
