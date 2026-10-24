import React from "react";
import styles from "./navbar.module.css"
function Navbar() {


  return (
    <>
      <div className={styles.navContainer}>
        <div>logo</div>

        <div className={styles.navTabs}>
          <ul>
            <li>home</li>
            <li>dashboard</li>
            <li>services</li>
            <li>contact</li>
          </ul>
        </div>

        <div className={styles.userOpt}>
          <button className={styles.login}> login</button>
          <button>sign up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
