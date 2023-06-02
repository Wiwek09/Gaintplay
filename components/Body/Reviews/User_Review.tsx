import React from 'react'
import styles from './style.module.css'
import Heading_Section from '../HeadingSection/Heading_Section'
// import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/Io'
import Review from './Review'
import {reviews} from './data'
import Image from 'next/image'

type Props = {}

const User_Review = (props: Props) => {
  return (
      <div className={styles.container} >
          <section className={styles.main} >
              <Heading_Section heading={"What our users says about us" } subText= {"Review left by our users"} key={1}/>
              <div className={styles.review} >
                <div className={styles.review1} >
                   <p>Excellent</p>
                   <span><Image src='https://gaintplay.com/assets/images/stars-4.5.svg' alt='reviews' /></span>
                   <p>Based on <a href='https://www.trustpilot.com/review/gaintplay.com?stars=4&stars=5' target="_blank" >2906 reviews</a></p>
                   <div><Image src='/trustpilot.png' alt='picture' /></div>
                </div>
                <div className={styles.review2} >
                  <div>
                    {/* <IoIosArrowDropleftCircle /> */}
                  </div>
                  <div className={styles.review2_main} >
                    {reviews.map((el) => {
                      return <Review el={el} key={el.id} />
                    })}
                  </div>
                </div>
              </div>
          </section>
      </div>
  )
}

export default User_Review