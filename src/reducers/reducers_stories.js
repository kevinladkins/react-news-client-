import { defaultState } from './default'
import slug from 'slug';
import { mapAndSlug } from '../utils'
import { FETCH_STORIES } from '../actions'

export default function storiesReducer(state = null, action) {
  switch (action.type) {
    case FETCH_STORIES:
      const { results } = action.payload.data;
      const keyMapped = mapAndSlug(results, 'title');
      return keyMapped;
  }
  return state;
}
