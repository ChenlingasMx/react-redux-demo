const add = "add"
const update = "update"

const ComBAddAction = { type: add }

// 异步方法
const ComUpdateAction = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      let action = { type: update, payload }
      return dispatch(action)
    }, 1000)
  }
}

export {
  ComBAddAction,
  ComUpdateAction
}