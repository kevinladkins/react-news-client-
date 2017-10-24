import { API_KEY, ROOT_PATH } from './api'
import axios from 'axios';

export const FETCH_STORIES = 'fetch_stories';
export const SET_LEAD = 'set_lead';
export const FETCH_UPDATE = 'fetch_update'

export function fetchStories(section) {
  const request = axios.get(`${ROOT_PATH}${section}.json${API_KEY}`);
  return {
    type: FETCH_STORIES,
    payload: request
  }
}

export function fetchUpdate(section) {
  const request = axios.get(`${ROOT_PATH}${section}.json${API_KEY}`);
  return {
    type: FETCH_UPDATE,
    payload: request
  }
};


export function setLead(slug) {
  return {
    type: SET_LEAD,
    payload: slug
  }
}
