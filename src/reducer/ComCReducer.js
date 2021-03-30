

const initState = {
	name: "hi,我是ComC"
}

function ComCReducer(state = initState, action) {
	switch (action.type) {
		case "updateComC":
			return { ...state, ...action.payload  }
		default:
			return state
	}
}

export default ComCReducer