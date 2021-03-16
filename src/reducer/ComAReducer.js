const initState = {
	count: 0
}

function ComAReducer(state = initState, action) {
	switch (action.type) {
		case "add":
			return { ...state, count: state.count + 1 };
		case "update":
			return { ...state, count: state.count + action.payload }
		case "reset":
			return { ...state, count: 0 }
		default:
			return state
	}
}

export default ComAReducer