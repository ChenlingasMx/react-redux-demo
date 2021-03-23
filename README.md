# react-redux-demo
`自己练习的一个简单的react-redux-demo`
```javascript
//redux 和react-redux（关联react和redux）
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//reducers 状态树state和逻辑操作
import rootRedux from './reducer/index'
import thunk from 'redux-thunk' //解决异步的插件
//生成状态树对象
const store = createStore(rootRedux, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

