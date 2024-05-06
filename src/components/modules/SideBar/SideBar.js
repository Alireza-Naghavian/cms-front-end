import React from "react";
import styles from "@/styles/Sidebar.module.css";
function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_logo}>
        <img src="/images/logo/logo.webp" alt="" />
        <h3>سبزلرن</h3>
      </div>
      <ul className={styles.sidebar_links}>
        <li>
          <a href="#" className={styles.active || styles.sidebar_link}>
            {/* add active to enable link */}
            <span></span>
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="#" className={styles.sidebar_links}>
            <span></span>
            تماس با ما
          </a>
        </li>
        <li>
          <a href="#" className={styles.sidebar_links}>
            <span></span>
            درباره ما
          </a>
        </li>
      </ul>
      <div className={styles.sidebar_logout}>
        <a href="#" className={styles.logout}>
          <span></span>
          خروج
        </a>
      </div>
    </aside>
  );
}

export default SideBar;
