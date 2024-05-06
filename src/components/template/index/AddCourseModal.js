import React, { useState } from "react";
import styles from "@/styles/Modal.module.css";
import useCreateCourse from "@/hooks/useCreateCourse";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
function AddCourseModal({ hideAddCourseModal }) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const { creating, isCreateLoading } = useCreateCourse();
  const addNewCourse = async (event) => {
    event.preventDefault();
    await creating(
      { title },
      {
        onSuccess: (data) => {
          Swal.fire({
            icon: "success",
            title: data.message,
          });
          hideAddCourseModal();
          setTitle("");
          queryClient.invalidateQueries({ queryKey: ["courses/all"] });
        },
        onError: (data) => {
          Swal.fire({
            icon: "error",
            title: "خطای ناشناخته !",
            text: data.message,
          });
        },
      }
    );
  };
  return (
    <div className={styles.modal_container} id="add-new-course-modal">
      <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
        <form
          action="#"
          className={styles.edit_user_form}
          onSubmit={addNewCourse}
        >
          <div className={styles.input_field}>
            <span></span>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="عنوان دوره"
              spellCheck="false"
            />
          </div>

          <button
            disabled={isCreateLoading}
            type="submit"
            className={styles.update_btn}
          >
            {isCreateLoading ? "...درحال ایجاد" : "ایجاد پروژه"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourseModal;
