import React from 'react'
import {Link} from 'react-router-dom'

export default function PostComponent ({ post }) {
  return (
    <div className='post-list'>
      <h3 className='subheader'>
        Posts
      </h3>
      <div className='post' key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <i>by {post.author}</i><br/>
        on <b>{''+new Date(post.timestamp)}</b>
        <Link
          to={`/`}
          className="all-posts-link"
        >Back to All Posts</Link>
      </div>
    </div>
  )
}
