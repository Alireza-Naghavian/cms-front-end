import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
function NavBar() {
  const [search, setSearch] = useState("");
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input
          type="text"
          placeholder="جستجو کنید...."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <span
          className={styles.navbar_search_icon}
        //   onClick={searchHandler}
        ></span>
      </div>
      <div className={styles.navbar_user_avatar}>
        <img src="/images/avatar/avatar.png" alt="" />
      </div>
    </nav>
  );
}

export default NavBar;
