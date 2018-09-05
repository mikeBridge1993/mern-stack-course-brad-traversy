import axios from 'axios';
import { GET_PROFILE, GET_ERRORS, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, SET_CURRENT_USER } from './types';

//Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios.get('/api/profile')
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    }).catch(
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

//Create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
};

//Delete account and profile
export const deleteAccount = () => dispatch => {
  if(window.confirm('Are you sure? This cannot be undone')) {
    axios
    .delete('api/profile')
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
  }

  
};

//Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
};

//Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}
