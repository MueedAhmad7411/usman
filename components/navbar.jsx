"use client";

import * as React from 'react';
import Wave from '../photos/wave.jpeg';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/navbar.module.css";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (

    <div className={styles.waves}>
       <div className={styles.wave}>
        <Image className={styles.wave_image} src={Wave}
         alt='not found'
         width={80}
         height={80}/>
       </div>
       <div className={styles.navbar}>
          <Link className={styles.link} href="/services">Services</Link>
          <Link className={styles.link} href="/portfolio">Portfolio</Link>
          <Link className={styles.link} href="/blog">My work</Link>
          <Link className={styles.link} href="/blog">Blog</Link>
       </div>
       <div className='connect'>
      <Button className={styles.navbtn} variant="contained">Connect</Button>
      </div>

   </div>
  );
}

export default Navbar;
