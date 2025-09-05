const courses =[]

export const getCoursesReducer=(state={courses},action)=>{
    switch(action.type){
        case "SUCCESS_GET_Courses":
            return {courses: action.payload}
        case "FAIL_GET_Courses":
            return {courses: action.payload}
        default: return state        
    }
}
