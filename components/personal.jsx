import React from 'react';
import styles from "../styles/personal.module.css";
import Image from "next/image";
import usman from "../photos/usman.jpeg";
import 'bootstrap/dist/css/bootstrap.css';

const Personal = () => {
  return (
    <div className='bg-sky-50 h-auto'>
    <div className={styles.personal}>
      <div className={styles.left}>
        <h1>I can assist you in healthcare equipment to diagnose technical issues</h1>
        <p>Diagonosis is not the end but the begining of process</p>
     </div>
      <div className={styles.right}>
      <p>Eng:Muhammad Usman</p>
      </div>
  
   </div>
   </div>
  )
}

export default Personal
