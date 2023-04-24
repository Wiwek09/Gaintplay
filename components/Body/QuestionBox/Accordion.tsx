import React,{useState} from 'react'
import styles from './style.module.css'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/Io'


type Props = {item:data}

type data = {
            "title":string,
            "answer":string,
            "date":string
}

const Question_Box = ({item}: Props) => {
  const {title,answer,date} = item
  const [click,onClick] = useState(false)

  return (
    <div className={styles.accordion_div} >
        <button className={!click? `${styles.heading_div}` : `${styles.headingClick_div}`} onClick={()=> onClick(!click)}>
            <p>{title}</p>
            <span>
            {!click? <IoIosArrowUp/> : <IoIosArrowDown/> } 
            </span>
        </button>
        {click && <div className={styles.content} >
            <div>{answer}</div>
            <div>{date}</div>
         </div>}
    </div>
  )
}

export default Question_Box