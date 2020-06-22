import {
  POSTS_FETCH_FAILURE,
  POSTS_CREATE_FAILURE,
  POSTS_FETCH_REQUEST,
  POSTS_CREATE_REQUEST,
} from '../../../types';

export default (state = null, action) => {
  switch (action.type) {
    case POSTS_FETCH_FAILURE:
    case POSTS_CREATE_FAILURE:
      return { status: action.status };

    case POSTS_FETCH_REQUEST:
    case POSTS_CREATE_REQUEST:
      return null;

    default:
      return state;
  }
};
