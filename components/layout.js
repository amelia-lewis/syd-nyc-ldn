import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'SYD // NYC // LDN'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The current time in Sydney, New York City and London"
        />
        <meta
          property="og:image"
          content="/images/image.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <main className={styles.container}>{children}</main>

      <div className={styles.footer}>
        <p>Made with &hearts; and <a href="https://nextjs.org/">Next.js</a> by Amelia Lewis</p>
      </div>
    </>
  )
}