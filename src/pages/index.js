import Courses from "@/components/template/index/Courses";
import { getAllCourse } from "@/services/courseServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import axios from "axios";

export default function Home({ dehydratedState, courses }) {
  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Courses courses={courses?.data} />
      </HydrationBoundary>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const { data: courses } = await axios.get("http://localhost:3000/api/course");
  await queryClient.prefetchQuery({
    queryKey: ["courses/all"],
    queryFn: getAllCourse,
  });

  return {
    props: {
      courses,
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 12,
    },
  };
}
