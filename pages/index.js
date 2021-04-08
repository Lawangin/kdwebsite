import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/header'
import MainSlider from '../components/layout/main.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kashfi Design</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <MainSlider />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
