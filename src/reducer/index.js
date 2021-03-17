import { combineReducers } from 'redux';

//全局reducer
import ComBReducer from './ComBReducer'

//合并reducer
var rootRedux = combineReducers({
	ComBReducer
})

export default rootRedux