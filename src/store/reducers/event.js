import { get } from "lodash";
import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_ERROR,
  DETAIL_EVENT_REQUEST,
  DETAIL_EVENT_SUCCESS,
  DETAIL_EVENT_ERROR,
  SET_DELETE_EVENT_MODAL,
} from "../actions/event";

const initState = {
  isLoading: false,
  data: [],
  params: {
    page: 1,
    limit: 10,
    sort: "asc",
    sort_by: "name",
    status: null,
    search: null,
  },
  pagination: {
    currentPage: 1,
    lastPage: 1,
    count: 0,
    recordPerPage: 0,
  },
};

export default function EVENTReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data || [],
        pagination: {
          currentPage: action.payload.meta.current_page,
          lastPage: action.payload.meta.last_page,
          count: action.payload.meta.count,
          recordPerPage: action.payload.meta.record_per_page,
        },
      };
    case FETCH_EVENT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
