import {Types} from '../types'

const iState = {
  loader: false,
};

const SpinnerReducer = (state = iState, action) => {
  switch (action.type) {
    case Types.SET_SPINNER:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};
export default SpinnerReducer;