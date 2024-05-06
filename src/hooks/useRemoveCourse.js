import { useMutation } from "@tanstack/react-query";

import { deleteCourse } from "@/services/courseServices";

import Swal from "sweetalert2";

const useRemoveCourse = () => {
  const {isPending:isRemoving,mutate} = useMutation({
    mutationFn: deleteCourse,
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
  return {isRemoving,mutate}
};
export default useRemoveCourse
