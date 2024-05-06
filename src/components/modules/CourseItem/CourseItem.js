import React, { useState } from "react";
import styles from "@/styles/Course.module.css";
import EditModal from "@/components/template/index/EditModal";
import DeleteModal from "@/components/template/index/DeleteModal";
import useRemoveCourse from "@/hooks/useRemoveCourse";
import { useQueryClient } from "@tanstack/react-query";
import useUpdateCourse from "@/hooks/useUpdateCourse";

function CourseItem({ title, id }) {
  console.log(title);
  const qeuryClient = useQueryClient();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);
  const { mutate: UpdateCourse } = useUpdateCourse();
  const { mutate: delCourse } = useRemoveCourse();
  const removeCourse = () => {
    delCourse(
      { id },
      {
        onSuccess: () => {
          qeuryClient.invalidateQueries({ queryKey: ["courses/all"] });
          hideDeleteModal();
        },
      }
    );
  };
  const updateCourse = async (event, title) => {
    event.preventDefault();
    UpdateCourse(
      { id, title },
      {
        onSuccess: () => {
          hideEditModal();
          qeuryClient.invalidateQueries({ queryKey: ["courses/all"] });
        },
      }
    );
  };
  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src="/images/courses/PWA.jpg"
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            ویرایش
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            حذف
          </a>
        </div>
      </li>
      {showEditModal && (
        <EditModal updateHandler={updateCourse} hideEditModal={hideEditModal} />
      )}
      {showDeleteModal && (
        <DeleteModal
          removeHandler={removeCourse}
          hideDeleteModal={hideDeleteModal}
        />
      )}
    </>
  );
}

export default CourseItem;
