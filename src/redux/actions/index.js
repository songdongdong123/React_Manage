import * as types from '../actiontypes/index';

export const getTestSuccess = function (data) {
  return {type: types.TEST_DATA, payload: data}
}