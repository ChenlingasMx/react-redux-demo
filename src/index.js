import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//redux 和react-redux（关联react和redux）
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//reducers 状态树state和逻辑操作
import rootRedux from './reducer/index'
import thunk from 'redux-thunk' //解决异步的插件
import { renderRoutes } from "react-router-config";
import { routes } from '../src/config/route'
import { BrowserRouter } from 'react-router-dom';
//生成状态树对象
const store = createStore(rootRedux, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
