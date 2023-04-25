import React from 'react'
import styles from './style.module.css'
import Heading_Section from '../HeadingSection/Heading_Section'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/Io'
import Review from './Review'
import {reviews} from './data'

type Props = {}

const User_Review = (props: Props) => {
  return (
      <div className={styles.container} >
          <section className={styles.main} >
              <Heading_Section heading={"What our users says about us" } subText= {"Review left by our users"}/>
              <div className={styles.review} >
                <div className={styles.review1} >
                   <p>Excellent</p>
                   <span><img src='https://gaintplay.com/assets/images/stars-4.5.svg' /></span>
                   <p>Based on <a href='https://www.trustpilot.com/review/gaintplay.com?stars=4&stars=5' target="_blank" >2906 reviews</a></p>
                   <div><img src='/trustpilot.png' /></div>
                </div>
                <div className={styles.review2} >
                  <div>
                    <IoIosArrowDropleftCircle className={styles.left_arrow} />
                  </div>
                  <div className={styles.review2_main} >
                    {reviews.map((el) => {
                      return <Review el={el} />
                    })}
                  </div>
                </div>
              </div>
          </section>
      </div>
  )
}

export default User_Review