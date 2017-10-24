import slug from 'slug';
import { FETCH_STORIES, SET_LEAD } from '../actions'

export default function leadStoryReducer(state = null, action) {
  switch (action.type) {
    case FETCH_STORIES:
      var { results } = action.payload.data;
      return slug(results[0].title);
    case SET_LEAD:
      return action.payload;
  }
  return state;
}
