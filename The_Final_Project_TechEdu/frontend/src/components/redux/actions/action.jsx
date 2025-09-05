export const getAllCourses = () => async (dispatch) => {
    try {
        const data = await fetch("http://localhost:7200/course/getCourses",{
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        });
        const res =await data.json();
        // console.log(res);
        dispatch({type:"SUCCESS_GET_Courses",payload:res})

    } catch (error) {
        dispatch({type:"FAIL_GET_Courses",payload:error.response})
    }
}
 