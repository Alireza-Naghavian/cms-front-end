import { getAllCourse } from "@/services/courseServices";
import { useQuery } from "@tanstack/react-query";

const useGetAllCourse = () => {
  const { data,isPending:courseLoading } = useQuery({
    queryKey: ["courses/all"],
    queryFn: getAllCourse,
  });
const {data:courses}  =data || {}
  return { courses,courseLoading };
};
export default useGetAllCourse;
