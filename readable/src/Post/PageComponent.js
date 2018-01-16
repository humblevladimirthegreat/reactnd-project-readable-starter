import React from 'react'
import {Link} from 'react-router-dom'
import {allPostsActionCreator} from './PageAction'
import {connect} from 'react-redux'

export function PageComponent ({ posts }) {
  // const posts = this.props.posts
  return (
    <div className='post-list'>
      <h3 className='subheader'>
        Posts
      </h3>
      <ul>
        {(posts || []).map((post) => (
          <li className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <i>by {post.author}</i><br/>
            on <b>{''+new Date(post.timestamp)}</b>
            <Link
              to={`/post/${post.id}`}
              className="post-link"
            >View Post</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps({posts}) {
  return {
    posts
  }
}

function mapDispatchToProps(dispatch){
  return {
    allPosts: () => dispatch(allPostsActionCreator())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageComponent)
