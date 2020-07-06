import formReducer from "./form-visible-reducer"
import shirtReducer from './shirt-reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  formVisibleOnPage: formReducer,
  masterShirtList: shirtReducer
})

export default rootReducer;