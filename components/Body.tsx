import React,{useState} from 'react'
import styles from '../styles/Body.module.css'
import {BsPersonFill} from 'react-icons/Bs'
import {MdEmail} from 'react-icons/Md'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/Ai'
import {RiLockPasswordFill} from 'react-icons/Ri'
import Link from 'next/link'
import { useForm } from "react-hook-form";

type Props = {}

type FormData = {
  name: string;
  email:string;
  password:string;
};

const Body = (props: Props) => {
  const {register,handleSubmit,reset,formState: { errors } } = useForm<FormData>();

  const onSubmit =  handleSubmit(
    (data) => {
      console.log(JSON.stringify(data));
      reset() 
    }
    )

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
                      <form onSubmit={onSubmit} method="post" >
                        <div className={`${styles.forminput_div}`} >
                           <input type='text' >
                           </input>
                           <BsPersonFill className={styles.icon} />
                           {/* <span>Name</span> */}
                        </div>
                        <div className={styles.forminput_div} >
                           <input type='text' {...register("email",{required:true,pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} id='email' >
                           </input>
                           {
                            errors?.email?.type === "required" && <p className="text-red-600" >This field is required</p>
                            }
                            {
                            errors?.email?.type === "pattern" && <p className="text-red-600" >Not valid email</p>
                            }
                           <MdEmail className={styles.icon} />
                           {/* <span>Email Address</span> */}
                        </div>
                        <div className={`${styles.forminput_div} ${styles.forminput_divPassword} `} >
                           <input type={open?"text":"password"} >
                           </input>
                           <RiLockPasswordFill className={styles.icon} />
                           <div className={`${styles.icon} ${styles.password_icon}`} onClick={toggle} >
                           {open? (<AiFillEye/>) : (<AiFillEyeInvisible/>)}
                           </div>
                           {/* <span>Password</span> */}
                        </div>
                        <div className={styles.terms} >
                          <p>By signing up you agree to our <span><Link href={"https://gaintplay.com/terms"} >terms and conditions</Link></span> as well as <span><Link href={"https://gaintplay.com/privacy"} >Privacy Policy</Link></span>. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        </div>
                        <div className={styles.sign} >
                           <button className={styles.button1}>
                            <span>Sign Up</span>
                           </button>
                           <div className={styles.middle} >
                            <span className={styles.middle_OR}>|</span>
                            <span>OR</span>
                            <span className={styles.middle_OR} >|</span>
                           </div>
                           <div>
                           <button className={styles.button2} >
                            <span>Continue with </span>
                           </button>
                           </div>
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