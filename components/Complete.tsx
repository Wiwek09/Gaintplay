import React, {useState} from 'react'
import {data} from '../data/earning_data'
import styles from '../styles/Earnings.module.css'
import Earnings from './Earnings'
import {RiArrowUpSLine,RiArrowDownSLine} from 'react-icons/Ri'

type Props = {}

const Complete = (props: Props) => {

 const [hide,setHide] =useState(false)

 const pressed = () =>{
    //  setHide(!hide)
    //  setHide((prev) =>{
    //      return !prev
    //  })
    setHide(prev=>!prev)
 }

  return (
    <div  className={ `${hide? styles.hide : ""} ${styles.parent}`} >
      <div className={ !hide ? styles.main : styles.hide_main} >
       {data.map((el) =>{
          return <Earnings el={el} key={el._id} />
       })}
      </div>
      <div className='' onClick={pressed} >
        {!hide ? 
        (
        <button className={styles.hidebtn} >
            <RiArrowUpSLine/>Hide  
        </button>
        )
        : 
        ( 
        <button className={styles.showbtn} >
            <RiArrowDownSLine/>Show Live Stats
            <span className={styles.showbtn_indicator} ></span>
        </button>
        )
        }
      </div>
    </div>
  )
}

export default Complete