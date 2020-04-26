import {
    CREATE_POST_REQUEST,
    CREATE_POST_ERROR,
    CREATE_POST_SUCCESS
} from '../constants'

const initialState = {
    loading: false,
    posts: []
  
}


export default function (state = initialState, action) {
    switch(action.type) {
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true 
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                newPost: action.payload
            }
        case CREATE_POST_ERROR:
            return {
                ...state,
                loading: false
            }

            case 'FETCH_POSTS_START':
            return {
                ...state,
                loading: true
            }

            case 'FETCH_ALL_POSTS_SUCCESS':
                return {
                    ...state,
                    posts: action.payload,
                    loading: false
                }
        default: 
            return state
    }
}