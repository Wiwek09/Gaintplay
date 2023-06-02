import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

type Props = {el:reviews}

type reviews = {
                image:string,
                date:string,
                heading:string,
                topic:string,
                username:string
}

const Review = ({el}: Props) => {
  const {image,username,date,topic,heading} = el
  return (
    <div className={styles.top}>
        <div className={styles.main_div} >
          <div className={styles.upper} >
            <Image src={`https://gaintplay.com/assets/images/stars-${image}`} alt='users' />
            <span>{date}</span>
          </div>
        </div>
           <p>{topic}</p>
          <div className={styles.info} >
            <p>{heading}</p>
            <p>{username}</p>
          </div>
    </div>
  )
}

export default Review