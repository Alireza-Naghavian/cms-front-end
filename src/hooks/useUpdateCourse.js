import { updataeCourse } from "@/services/courseServices";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
const useUpdateCourse = () => {
  const { mutate } = useMutation({
    mutationFn: updataeCourse,
    onSuccess: (data) => {
      Swal.fire({
        title: data.message,
        icon: "success",
      });
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: err.message,
      });
    },
  });
  return { mutate };
};
export default useUpdateCourse;
