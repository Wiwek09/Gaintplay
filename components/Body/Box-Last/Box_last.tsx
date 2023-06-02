import React from 'react'
import styles from './style.module.css'

type Props = {heading:string,
              text:string,
              color:Array<string>
              }

const Box_last = ({heading,text,color}: Props) => {
  return (
    <div className={styles.main_div} >
      <p>{heading}</p>
      <p>{text}</p>
     {color.map((x) => {
       return <div id={`${styles[x]}`} className={styles.position} key={x}  />
      })} 
    </div>
  )
}

export default Box_last