import React, { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import CourseItem from "@/components/modules/CourseItem/CourseItem";
import styles from "@/styles/Course.module.css";
function Courses({ courses }) {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const hideAddCourseModal = () => setShowAddCourseModal(false);
  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {courses?.map((course) => {
            return (
              <CourseItem
                key={course._id}
                title={course?.title}
                id={course?._id}
              />
            );
          })}
        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal} />
      )}
    </>
  );
}

export default Courses;
