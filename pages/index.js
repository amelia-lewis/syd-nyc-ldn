import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import City from '../components/city'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <City
        name="SYD"
        timezone="Australia/Sydney"
      />
      
      <City
        name="NYC"
        timezone="US/Eastern"
      />
      
      <City
        name="LDN"
        timezone="Europe/London"
      />
    </Layout>
  )
}