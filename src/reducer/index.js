import { combineReducers } from 'redux';

//全局reducer
import ComBReducer from './ComBReducer'
import ComCReducer from './ComCReducer'
//合并reducer
var rootRedux = combineReducers({
	ComBReducer,
	ComCReducer
})

export default rootRedux