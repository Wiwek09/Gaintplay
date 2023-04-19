import React from 'react'
import styles from './style.module.css'

type Props = {heading:string,
              subText:string         
              }

const Heading_Section = ({heading, subText}: Props) => {
  return (
    <div className={styles.text}>
       <p>{heading}</p>
       <p>{subText}</p>
    </div>
  )
}

export default Heading_Section