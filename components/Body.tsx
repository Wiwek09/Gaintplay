import React,{useState} from 'react'
import styles from '../styles/Body.module.css'
import {BsPersonFill} from 'react-icons/Bs'
import {MdEmail} from 'react-icons/Md'
import {AiFillEye,AiFillEyeInvisible,AiFillWarning} from 'react-icons/Ai'
import {RiLockPasswordFill} from 'react-icons/Ri'
import {FcGoogle} from 'react-icons/Fc'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import Heading_Section from './Body/HeadingSection/Heading_Section'
import Box_Section from './Body/Box/Box_Section'

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
    <div className={styles.body_div} >
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
                      <form onSubmit={onSubmit}  >
                        <div className={`${styles.forminput_div}`} >
                           <input type='text' placeholder=' ' {...register("name",{required:true})} >
                           </input>                         
                            {
                            errors?.email?.type === "required" && 
                            <div className={styles.error_div} >
                            <AiFillWarning/>
                            <span>Please enter your name</span>   </div>                        
                            }                           
                          <BsPersonFill className={styles.icon} />
                          <div className={styles.inner_input} >
                           <span>Name</span>
                           </div>
                        </div>
                        <div className={styles.forminput_div} >
                           <input type='text' placeholder=' ' {...register("email",{required:true,pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} id='email' >
                           </input>
                            {
                            errors?.email?.type === "required" &&
                            <div className={styles.error_div} >
                            <AiFillWarning/> 
                            <span>Please enter your email</span></div>
                            }
                            {
                            errors?.email?.type === "pattern" && 
                            <div className={styles.error_div} >
                            <AiFillWarning/>
                            <span>Please enter valid email</span></div>
                            }
                           <MdEmail className={styles.icon} />
                           <div className={styles.inner_input} >
                           <span>Email Address</span>
                           </div>
                        </div>
                        <div className={`${styles.forminput_div} ${styles.forminput_divPassword} `} >
                           <input type={open?"text":"password"} placeholder=' ' {...register("password",{required:true,maxLength:8,pattern:/(?=.*[!@#$%^&*])/})} >
                           </input>
                           {
                            errors?.password?.type === "required" &&
                            <div className={styles.error_div} >
                            <AiFillWarning/>
                            <span>Please enter your password</span></div>
                           }
                           {
                            errors?.password?.type === "maxLength" || errors?.password?.type === "pattern"  &&
                            <div className={styles.error_div} >
                            <AiFillWarning/>
                            <span>Miniumum 8 characters with atleast one special character</span></div>
                           }
                           <RiLockPasswordFill className={styles.icon} />
                           <div className={`${styles.icon} ${styles.password_icon}`} onClick={toggle} >
                           {open? (<AiFillEye/>) : (<AiFillEyeInvisible/>)}
                           </div>
                           <div className={styles.inner_input} >
                           <span>Password</span>
                           </div>
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
                           <Link href={"https://apis.google.com/js/platform.js"} >
                           <div className={styles.button2} >
                            <FcGoogle />       
                            <span>Continue with Google</span>                        
                           </div>
                           </Link>
                        </div>
                      </form>
                    </div>
                  </div>  
              </div>
            </section>
        </div>
    </div>
    {/*  */}
    <div className={styles.second_div} >
        <div className={styles.text_div}>      
            <h1>Get Paid</h1>
            <p>Reedem your points for cash, Khalti and gifts cards .</p>
        </div>
        <div className={styles.logo_div}>
          <div className={styles.logo1} >
            <img  src='/paypal-icon.svg' /> 
          </div>
          <div className={styles.logo2} >
            <img src='/khalti.png' />
          </div>
          <div className={styles.logo3} >
            <img src='/mastercard.svg' />
          </div>
        </div>
    </div>
    <div className={styles.third_div} >
      <div className={styles.distance}></div>
      <Heading_Section/>
      <div className={styles.distance}></div>
      <Box_Section/>
    </div>
  </div>
  )
}

export default Body