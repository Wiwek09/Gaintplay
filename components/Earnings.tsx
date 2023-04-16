import React from 'react'
import styles from '../styles/Earnings.module.css'

type Props = {el:data}

type data ={
    points: string;
    image: string,
    offer_name: string;
    type: string;
    username: string;
    id: string;
    _id: string;
}

const Earnings = ({el}: Props) => {
  return (
    <div>
        <button className={styles.btn_user} >   
          <div>
            <img className={styles.img} src={`https://gaintplay.com/assets/avatars/low/${el.image}`} alt='avatar images' />       
          </div>
          <div className={styles.text} >
           <span className={styles.type}>
            {el.type}
           </span>
           <span className={styles.username} >
             {el.username}
           </span>
          </div>
          <div className={styles.main_points} >
            <span className={styles.points} >
              {el.points}
            </span>
          </div>
        </button>
        {/* <div className={styles.hover_btn} > */}
    </div>
  )
}

export default Earnings