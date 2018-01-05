import React from 'react'

export default function PageComponent ({ posts }) {
  return (
    <div className='post-list'>
      <h3 className='subheader'>
        Posts
      </h3>
      <ul>
        {posts.map((post) => (
          <li className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <i>by {post.author}</i><br/>
            on <b>{''+new Date(post.timestamp)}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}
