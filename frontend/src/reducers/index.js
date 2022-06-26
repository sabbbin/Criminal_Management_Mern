import { combineReducers } from "redux";

import {post,login} from './post'
export default combineReducers({
    post:post,
    login:login
})