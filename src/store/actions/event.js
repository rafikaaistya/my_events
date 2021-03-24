import axios from "axios";
import { errorReturn, successReturn } from "../../helpers/helperApi";

export const FETCH_EVENT_REQUEST = "FETCH_EVENT_REQUEST";
export const FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS";
export const FETCH_EVENT_ERROR = "FETCH_EVENT_ERROR";

const PATH = `https://jsonplaceholder.typicode.com/posts`;

export const fetchData = (params) => {
  return (dispatch) => {
    dispatch({ type: FETCH_EVENT_REQUEST, loading: true });
    return axios({
      method: "GET",
      url: `${PATH}`,
      params,
    }).then(
      (response) => {
        dispatch({
          type: FETCH_EVENT_SUCCESS,
          payload: response.data,
        });
        return response.data;
      },
      (error) => {
        dispatch({ type: FETCH_EVENT_ERROR, error: error.response });
        errorReturn(error, dispatch);
      }
    );
  };
};

export const createData = (data) => {
  return (dispatch) =>
    axios({
      method: "POST",
      url: `${PATH}`,
      data,
    }).then(
      (response) => response.data,
      (error) => {
        errorReturn(error, dispatch);
        throw error;
      }
    );
};
