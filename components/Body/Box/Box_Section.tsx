import React from 'react'
import styles from '../Box/style.module.css'
import Link from 'next/link'

type Props = {heading:string,
              subtext1:string,
              subtext2:string,
              number:string,
              buttontxt:string,
              color:string,
              bgColor:string
              }

const Box_Section = ({heading, subtext1, subtext2, number, buttontxt, color, bgColor }: Props) => {
  return (
    <div className={styles.main_div} >
     <section>
        <p id={`${styles[color]}`} >{heading}</p>
        <div>
          <p>{subtext1}</p>
          <p>{subtext2}</p>
        </div>
     </section>
     <section>
        <div className={styles.number} >{number}</div>
     </section  >
      <Link href={"/earn"} legacyBehavior  >
      <a id={`${styles[bgColor]}`} className={styles.link}>
      {buttontxt}
     </a>
     </Link>
    </div>
  )
}

export default Box_Section