import { combineReducers, applyMiddleware, createStore } from 'redux';
import storiesReducer from './reducers_stories';
import leadStoryReducer from './reducers_lead_story';
import ReduxPromise from 'redux-promise';

const rootReducer = combineReducers(
  {
    stories: storiesReducer,
    lead: leadStoryReducer
  }
)

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxPromise)
)

export default store;
