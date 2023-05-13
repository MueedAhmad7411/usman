import React from 'react';
import styles from "../styles/personal.module.css";
import Image from "next/image";
import usman from "../photos/usman.jpeg"

const Personal = () => {
  return (
    <div className={styles.personal}>
      <div className={styles.left}>
        <h1>I can assist you in healthcare equipment to diagnose technical issues</h1>

      </div>
      <div className={styles.right}>
        <Image className={styles.usman_image}
         src={usman} 
         alt="not found"
         width={300}
         height= {300}/>
      </div>

    </div>
  )
}

export default Personal
