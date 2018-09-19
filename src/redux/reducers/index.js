import * as types from '../actiontypes/index';
import * as actions from '../actions/index';

// state
const initState = {
  test: {}
}


// reducer
export default function state (state = initState, action) {
  switch (action.type) {
    case types.TEST_DATA:
      return {...state, test:{...action.payload}}
    default:
      return state
  }
}

// 异步处理
export function getTestInfo () {
  return dispatch => {
    setTimeout(() => {
      dispatch(actions.getTestSuccess({name: 'ethan', age: 18, work: 'web'}))
    }, 1000)
  }
}
