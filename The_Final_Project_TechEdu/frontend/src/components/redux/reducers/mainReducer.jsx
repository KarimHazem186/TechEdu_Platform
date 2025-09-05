import { getCoursesReducer } from "./coursesReducer";
import {combineReducers} from "redux"

const rootreducers = combineReducers ({
    getCoursesdata: getCoursesReducer
});


export default rootreducers;