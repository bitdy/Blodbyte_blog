import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'


const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/testId' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tittle</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in.</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tittle</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in.</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tittle</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in.</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tittle</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in.</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tittle</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in.</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tittle</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in.</p>
        </div>
      </Link>
  </div>
  )
}

export default Blog