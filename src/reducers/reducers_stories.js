import { defaultState } from './default'
import slug from 'slug';
import { mapAndSlug, setImageKeys } from '../utils'
import { FETCH_STORIES, FETCH_UPDATE } from '../actions'

export default function storiesReducer(state = null, action) {
  switch (action.type) {
    case FETCH_STORIES:
      return setStories(action);
    case FETCH_UPDATE:
      return setStories(action);
  }
  return state;
}

function setStories(action) {
  var { results } = action.payload.data;
  const newData = results.map(story => {
    return setImageKeys(story)
  });
  return mapAndSlug(newData, 'title');
}
