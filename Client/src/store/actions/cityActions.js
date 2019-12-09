import { SET_FILTER_TEXT } from "../constants/action_type";
import { FETCH_DATA } from "../constants/action_type";
import { LEAVE_DATA } from "../constants/action_type";

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:5000/cities/all")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_DATA, payload: json });
      });
  };
}

export function setData() {
  return function(dispatch) {
    return fetch("http://localhost:5000/cities/addCity")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LEAVE_DATA, payload: json });
      });
  };
}

export const setFilterText2 = (payload) => {
  return { type: SET_FILTER_TEXT, payload };
}