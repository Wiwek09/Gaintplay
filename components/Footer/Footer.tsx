import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import {FaRegNewspaper} from 'react-icons/Fa'
import {CiWarning} from 'react-icons/Ci'


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.container} >
        <section className={styles.main} >
          <div className={styles.line}></div>
          <div className={styles.links}>
            <div className={styles.left_div} >
              <span>
                <img src='diagram.gif' />
              </span>
              <div>
                <a>GaintPlay</a>
                <a>Download on Andriod App.</a>
              </div>  
            </div>
            <div className={styles.first} >
              <span className={styles.title} >About</span>
              <div>
                <Link className={styles.icon_text} href={"#"} >
                  <FaRegNewspaper/>Terms of Service</Link>
                <Link href={"#"}></Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer