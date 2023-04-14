import React,{useState} from 'react'
import styles from '../styles/Body.module.css'
import {BsPersonFill} from 'react-icons/Bs'
import {MdEmail} from 'react-icons/Md'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/Ai'
import {RiLockPasswordFill} from 'react-icons/Ri'
import Link from 'next/link'

type Props = {}

const Body = (props: Props) => {

  const [open,setOpen] = useState(false)

  const toggle = () =>{
    setOpen(!open)
  }

  return (
    <div className={styles.main_div} >
        <div className={styles.section_part} >
            <section className={styles.section_1} >
             <h1>Earn Money by</h1>
             <h2>Playing Games</h2>
             <p>Earn coins for simple tasks such as completing Offerwalls , Surveys , playing games, watching videos and more. Users already earned more than $100,000 USD on GaintPlay!</p>
             <div  > 
             <Link className={styles.earn_main} href={"/earn"} >Start Earning</Link> 
             </div>
            </section>
            <section className={styles.section_2} >
              <div className={styles.main_form} >
                  <div className={styles.backcolor1} ></div>
                  <div className={styles.backcolor2} ></div>
                  <div className={styles.form_div} >
                    <div className={styles.signup_heading} >Sign Up</div>
                    <div className={styles.main_form} >
                      <form >
                        <div className={`${styles.forminput_div}`} >
                           <input>
                           </input>
                           <BsPersonFill className={styles.icon} />
                           <span>Name</span>
                        </div>
                        <div className={styles.forminput_div} >
                           <input>
                           </input>
                           <MdEmail className={styles.icon} />
                           <span>Email Address</span>
                        </div>
                        <div className={`${styles.forminput_div} ${styles.forminput_divPassword} `} >
                           <input>
                           </input>
                           <RiLockPasswordFill className={styles.icon} />
                           <div className={`${styles.icon} ${styles.password_icon}`} onClick={toggle} >
                           {open? (<AiFillEye/>) : (<AiFillEyeInvisible/>)}
                           </div>
                           <span>Password</span>
                        </div>
                      </form>
                    </div>
                  </div>
              </div>
            </section>
        </div>
    </div>
  )
}

export default Body