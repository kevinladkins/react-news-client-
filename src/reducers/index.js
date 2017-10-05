import { combineReducers, applyMiddleware, createStore } from 'redux';
import storiesReducer from './reducers_stories';
import promise from 'redux-promise';

const rootReducer = combineReducers(
  {stories: storiesReducer}
)

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise)
)

export default store;
