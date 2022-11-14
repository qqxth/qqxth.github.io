import {LOGIN_ROUTE, TASKS_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE, ACTIVATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Activation from "./pages/Activation";

export const authRoutes = [
  {
    path: TASKS_ROUTE,
    Component: Home
  }
]
export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: ACTIVATION_ROUTE + '/:params',
    Component: Activation
  },

]