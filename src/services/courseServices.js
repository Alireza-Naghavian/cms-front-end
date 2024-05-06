import http from "./httpServices";

export const getAllCourse = () => {
  return http.get("/course").then((data) => data.data);
};
export const createNewCourse = ({title}) => {
  return http.post("/course", {title}).then((data) => data.data);
};
export const deleteCourse = ({id})=>{
return http.delete(`/course/${id}`).then((data)=>data.data)
}
export const updataeCourse = ({id,title})=>{
return http.put(`/course/${id}`,{title}).then((data)=>data.data)
}
