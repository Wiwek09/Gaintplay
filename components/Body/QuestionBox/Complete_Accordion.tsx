import React from 'react'
import styles from './style.module.css'
import Accordion from './Accordion'
import {data} from './data'

type Props = {}

const Complete_Accordion = (props: Props) => {
  return (
    <div>
      <section className={styles.map} >
        {data.map((item) =>{
            return <Accordion item={item} key={item.id} /> 
        })}
      </section>
    </div>
  )
}

export default Complete_Accordion