import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Complete from '../components/Complete'
import Body from '../components/Body'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>  
      <Head><title>Gaintplay</title></Head>
      <div className={styles.position} >
       <Navbar/>
       <Complete />
       </div>
       <Body/>
       <Footer/>
    </div>
  )
}
