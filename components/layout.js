import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'SYD - NYC - LDN'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☀️</text></svg>" />
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
        <p>Made with &hearts; and <a href="https://nextjs.org/" target="_blank">Next.js</a> by <a href="https://amelia.design/" target="_blank">Amelia Lewis</a></p>
      </div>
    </>
  )
}