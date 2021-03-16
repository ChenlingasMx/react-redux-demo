import { combineReducers } from 'redux';

//全局reducer
import ComAReducer from './ComAReducer'

//合并reducer
var rootRedux = combineReducers({
	ComAReducer
})

export default rootRedux