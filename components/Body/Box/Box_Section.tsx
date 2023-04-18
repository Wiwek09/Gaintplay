import React from 'react'
import styles from '../Box/style.module.css'

type Props = {}

const Box_Section = (props: Props) => {
  return (
    <div className={styles.main_div} >
     <section>
        <h1>Do Task</h1>
        <p>Fill in surveys,</p>
        <p>play games and more</p>
     </section>
     <section>
        <div>1</div>
     </section>
    </div>
  )
}

export default Box_Section