import React, { useState } from "react";
import styles from '@/styles/Modal.module.css'
const EditModal = ({ hideEditModal, updateHandler }) => {
  const [title, setTitle] = useState("");

  return (
    <div className={styles.modal_container} id="edit-modal">
      <div className={styles.modal_bg} onClick={hideEditModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
        <form className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span></span>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="عنوان دوره"
              spellcheck="false"
            />
          </div>
          <button
            type="submit"
            className={styles.update_btn}
            onClick={(event) => updateHandler(event, title)}
          >
            اپدیت دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
