"use client";

import * as React from 'react';
import styles from "../styles/personal.module.css";
import  Button  from '@mui/material/Button';

const Personal = () => {
  return (
    <div className='bg-sky-50 h-auto'>
    <div className={styles.personal}>
      <div className={styles.left}>
        <h1>I can assist you in healthcare equipment to diagnose technical issues</h1>
        <p>Diagonosis is not the end but the begining of process</p>
        <Button style={{background:"#2A93D5",marginLeft:"25%",marginTop:"3%",width:"150px"}} variant="contained">Explore</Button>
     </div>
      <div className={styles.right}>
      <p>Muhammad Usman</p>
      </div>
   </div>
  </div>
  )
}

export default Personal
