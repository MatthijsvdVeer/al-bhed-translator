import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import translate from "./translate"

export default combineReducers({
  router: routerReducer,
  translate
})
