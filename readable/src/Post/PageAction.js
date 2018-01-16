import * as BackendAPI from '../BackendAPI'

const ALL_POSTS = 'GET_ALL_POSTS'

export function allPostsActionCreator() {
  const allPosts = BackendAPI.getAllPosts()
  return {
    type: ALL_POSTS,
    payload: allPosts
  };
}
