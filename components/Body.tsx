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
import Box_last from './Body/Box-Last/Box_last'
import Complete_Accordion from './Body/QuestionBox/Complete_Accordion'

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
  <div className='body' >
  <div className={styles.container} >
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
      <Heading_Section heading={"Here's how you do it"} subText={"Earning money in gaintplay is easy as it gets ."} />

      <div className={styles.distance}></div>

        <div className={styles.box_div} >
           <Box_Section heading={"Do Task"} subtext1={"Fill in surveys,"}    subtext2={"play games and more"} number={"1"} buttontxt={"View    Offers"} color={'orange'} bgColor={'bgOrange'} />
           <div>
           <img src='/lines_1.svg' />
           </div>
           <Box_Section heading={"Earn Coins"} subtext1={"1000 coins = $1 USD"}    subtext2={"Get Rewarded for your time"} number={"2"} buttontxt=   {"Start Earning"} color={'green'} bgColor={'bgGreen'}  />
           <div>
           <img src='/lines_2.svg' />
           </div>
           <Box_Section heading={"Get Paid"} subtext1={"Reedeem your coins for    cash,"} subtext2={"khalti or bhukka"} number={"3"} buttontxt={"View    Cashout Options"} color={'blue'} bgColor={'bgBlue'}  />

        </div>
     <div className={styles.distance}></div>

     <Heading_Section heading={"Numbers dont lie"} subText={"There's a reason why our users love us !!"} />
     
     <div className={styles.distance}></div>

     <div className={styles.box_last} >
      <Box_last heading={"0h 25m 21s"} text={"Average Time until first cashout"} color={["orange","yellow","red"]}/>
      <div className={styles.box_gap} ></div>
      <Box_last heading={"$2"} text={"Average earning per user"} color={["green1","green2","yellow"]} />
      <div className={styles.box_gap} ></div>
      <Box_last heading={"$102,690+"} text={"Total USD earned on Gaintplay"} color={["blue1","blue2","blue3"]} />
     </div>
     <div className={styles.backcolor1} />
     <div className={styles.backcolor2} />
    </div>
  </div>
</div>
{/* Section {Grey Background} */}
 <section className={styles.faq_section}  >
   <div className={styles.faq} >
      <Heading_Section heading={"FAQ"} subText={"Users frequently as these questions"} />
      <Complete_Accordion/>
   </div>
 </section>
</div>
  )
}

export default Body