import React from 'react'
import styles from './style.module.css'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/Io'


type Props = {}

const Question_Box = (props: Props) => {
  return (
    <div >
        <button className={styles.accordion_div} >
          <div className={styles.heading_div} >
            <p>What do you want to hear</p>
            <span>
            <IoIosArrowUp/>
            </span>
          </div>
        </button>
    </div>
  )
}

export default Question_Box