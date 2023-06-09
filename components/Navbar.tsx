import React from 'react'
import styles from '../styles/Navbar.module.css'
import {BiCoinStack} from 'react-icons/bi'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {GiTrophy,GiAlliedStar} from 'react-icons/gi'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
    <nav className={styles.nav} >
      <main className={styles.main} >
        <a className={styles.icon_container} href='#' >
           <Image
            src='diagram.gif' 
            alt="GaintPlay"  
           />
           <h1>GaintPlay</h1>
        </a>
        <section className={styles.icons} >
          <a className={styles.earn} href='#' >    
             <BiCoinStack/>
             <span>Earn</span> 
          </a>
          <a  className={styles.cashout} href='#' >    
             <BsFillCalculatorFill/>
             <span>Cashout</span>     
          </a>
          <a  className={styles.leaderboard} href='#' >   
              <GiTrophy/>
              <span>LeaderBoard</span>        
          </a>
          <a  className={styles.reward} href='#' >       
              <GiAlliedStar/>
              <span>Reward</span>
          </a>
        </section>
        <section className={styles.main_sign} >
          <button className={styles.signin} >
           <span className={styles.btn_text} >Sign In</span>
          </button>
          <button className={styles.signup} >
           <span>Sign Up</span>
          </button>
        </section>
      </main>
    </nav>
    </>
  )
}

export default Navbar