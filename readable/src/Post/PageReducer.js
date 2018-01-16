import { ALL_POSTS } from './PageAction'

export default function reducePageActions(state = {}, action){
  switch (action.type) {
  case ALL_POSTS:
    const { posts } = action.payload

    return {
      ...state,
      [posts]: posts
    }
  default :
    return state
  }
}
