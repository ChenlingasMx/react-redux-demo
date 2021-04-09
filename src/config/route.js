import Home from '../pages/Home/index'
import ComA from '../pages/ComA/index'
import ComC from '../pages/ComC/index'
import App from '../App'

export const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/coma",
        component: ComA,
      },
      {
        path:"/comc",
        component:ComC
      }
    ]
  }
];