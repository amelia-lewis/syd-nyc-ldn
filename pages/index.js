import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
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