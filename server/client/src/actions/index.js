import axios from 'axios';
// All of our "action creators"
// Action creators are functions that return actions!

export const changeLogin = shouldBeLoggedIn => {
  return {
      type: 'change_auth',
      payload: shouldBeLoggedIn
  };
};

export const fetchUser = () => async dispatch => {
        const response = await axios.get('/api/current_user');
        dispatch({ type: 'fetch_user', payload: response.data });
    };


export const submitSurvey = values => {
    return { type: 'submit_survey ' };
};

