import Head from 'next/head'
import HomePageParentComponent from '../components/homepage/HomePageParentComponent'
import SideMenu from '../components/homepage/SideMenu'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Head>
        <title>My Birthday Events</title>
        <link rel="icon" href="/title2.jpg" />
      </Head>
    
      <HomePageParentComponent />

      <footer className={styles.footer}>
          Powered by Brothers.com
      </footer>
    </div>
  )
}
