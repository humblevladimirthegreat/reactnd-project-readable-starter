import * as BackendAPI from '../BackendAPI'

export const ALL_POSTS = 'ALL_POSTS'

export function allPostsActionCreator() {
  const allPosts = BackendAPI.getAllPosts()
  return {
    type: ALL_POSTS,
    payload: allPosts
  };
}
