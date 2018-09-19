import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import state from './reducers';

const reducers = combineReducers({state})

const reduxDevtools = window.devToolsExtension? window.devToolsExtension(): f => f;

// 中间件若没有返回会 报错
const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	reduxDevtools
))


export default store