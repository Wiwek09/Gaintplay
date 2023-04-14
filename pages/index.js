import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Complete from '../components/Complete'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className={styles.container}>  
      <Head><title>Gaintplay</title></Head>
       <Navbar/>
       <Complete/>
       <Body/>
    </div>
  )
}
