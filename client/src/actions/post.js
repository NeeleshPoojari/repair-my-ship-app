import {
    CREATE_POST_ERROR,
    CREATE_POST_SUCCESS,
    CREATE_POST_REQUEST
} from '../constants'
import { createPost, getAllPosts } from '../utils/api'



export const attemptCreatePost = (body) => async (dispatch, getState) => {
    dispatch({ type: CREATE_POST_REQUEST })
    try {
        const { token } = getState().auth
        const newPost = await createPost(body, token)
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: newPost
        })
    } catch (err) {
        dispatch({ 
            type: CREATE_POST_ERROR,
            payload: err
        })
    }
}

export const fetchAllPostsStart = () => ({
    type: 'FETCH_POSTS_START'
  });

  export const fetchAllPostsSuccess = posts => ({
    type: 'FETCH_ALL_POSTS_SUCCESS',
    payload: posts
  });

  export const fetchAllPostsFailure = errorMessage => ({
    type: 'FETCH_ALL_POSTS_failure',
    payload: errorMessage
  });

  export const fetchAllPostsStartAsync = () => {
    return async (dispatch) => {
      dispatch(fetchAllPostsStart());

      try {
        const AllPosts = await getAllPosts();
        console.log("All", AllPosts);
        dispatch(fetchAllPostsSuccess(AllPosts))
      } catch (error) {
        dispatch(fetchAllPostsFailure())
      }
      
    };
  };