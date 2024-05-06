import { createNewCourse } from "@/services/courseServices";
import { useMutation } from "@tanstack/react-query";

const useCreateCourse = () => {
  const { isPending: isCreateLoading, mutateAsync: creating } = useMutation({
    mutationFn: createNewCourse,
  });
  return { isCreateLoading, creating };
};
export default useCreateCourse;
