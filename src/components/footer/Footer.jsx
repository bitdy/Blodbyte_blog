import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 Blod Byte. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Blod Byte Facebook Account" title='Facebook'/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Blod Byte Instagram Account" title='Instagram'/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Blod Byte Twitter Account" title='Twitter'/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Blod Byte Youtube Account" title="Youtube"/>
      </div>
    </div>
  )
}

export default Footer