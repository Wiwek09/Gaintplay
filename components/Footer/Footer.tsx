import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import {FaRegNewspaper} from 'react-icons/fa'
import {CiWarning} from 'react-icons/ci'
import {MdEmail} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {TfiHeadphoneAlt} from 'react-icons/Tfi'
import {AiFillStar,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import Image from 'next/image'



type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.container} >
        <section className={styles.main} >
          <div className={styles.line}></div>
          <div className={styles.links}>
            <div className={styles.left_div} >
              <span>
                <Image src='diagram.gif' alt='logo' />
              </span>
              <div>
                <a>GaintPlay</a>
                <a>Download on Andriod App.</a>
              </div>  
            </div>
            <div className={styles.list} >
              <span className={styles.title} >About</span>
              <div>
                <Link className={styles.icon_text} href={"#"} >
                  <FaRegNewspaper/>Terms of Service
                </Link>
                <Link className={styles.icon_text} href={"#"}>
                  <CiWarning/>Privacy Policy
                </Link>
              </div>
            </div>
            <div className={styles.list} >
              <span className={styles.title} >Support</span>
              <div>
                <Link className={styles.icon_text} href={"#"} >
                  <MdEmail/>Contact
                </Link>
                <Link className={styles.icon_text} href={"#"} >
                <AiFillMessage/>Faqs
                </Link>
                <Link className={styles.icon_text} href={"#"} >
                <TfiHeadphoneAlt/>Live Support
                </Link>
              </div>
            </div>
            <div className={styles.list} >
              <span className={styles.title} >Social</span>
              <div>
                <Link className={styles.icon_text} href={"#"} >
                  <AiFillStar/>Trustpilot
                </Link>
                <Link className={styles.icon_text} href={"#"} >
                  <FaTelegramPlane/>Telegram
                </Link>
                <Link className={styles.icon_text} href={"#"} >
                  <BsTwitter/>Twitter
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.copyright} >
            <p>GaintPlay LLC <span> <AiOutlineCopyrightCircle className={styles.copyright_logo} /></span> Copyright 2023</p>
            <p>All Rights Reserved</p>
            <p>Designed By: <Link href={'#'} > Wiwek K.C.</Link></p>
          </div>
        </section>
    </div>
  )
}

export default Footer