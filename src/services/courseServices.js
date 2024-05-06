import http from "./httpServices";

export const getAllCourse = () => {
  return http.get("/course").then((data) => data.data);
};
export const createNewCourse = ({title}) => {
  return http.post("/course", {title}).then((data) => data.data);
};
