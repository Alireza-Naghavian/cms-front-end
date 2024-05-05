import React, { useState } from "react";
import styles from "@/styles/Modal.module.css";
function AddCourseModal({hideAddCourseModal, getCourses}) {
  const [title, setTitle] = useState("");
  const addNewCourse = async (event) => {
    event.preventDefault();
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

          <button type="submit" className={styles.update_btn}>
            ایجاد دوره
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourseModal;
