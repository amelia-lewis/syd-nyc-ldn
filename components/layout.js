import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'SYD - NYC - LDN'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The current time in Sydney, New York City and London" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="The current time in Sydney, New York City and London" />
        <meta property="og:image" content="https://syd-nyc-ldn.now.sh/images/image.png" />
        <meta property="og:url" content="https://syd-nyc-ldn.now.sh/" />
        <meta property="og:site_name" content="SYD - NYC - LDN" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <main className={styles.container}>{children}</main>

      <div className={styles.footer}>
        <p>Made with &hearts; and <a href="https://nextjs.org/">Next.js</a> by Amelia Lewis</p>
      </div>
    </>
  )
}