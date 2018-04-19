import {
  TYPE_GET_STATUS,
  TYPE_GET_STATUS_SUCCEEDED,
  TYPE_GET_STATUS_FAILED
} from "../actions/status";

const initialState = {
  status: null,
  statusLoading: false,
  error: null
};

export const helloWorldReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_GET_STATUS:
      return {
        ...state,
        statusLoading: true
      };
    case TYPE_GET_STATUS_SUCCEEDED:
      return {
        ...state,
        status: action.payload.status,
        statusLoading: false,
        error: null
      };
    case TYPE_GET_STATUS_FAILED:
      console.log(action.payload.error);
      return {
        ...state,
        status: null,
        statusLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
