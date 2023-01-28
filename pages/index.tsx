import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Promotions from '../components/promotions'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className='relative h-[200vh]'>
        <Landing />
      </main>
      <Promotions />
      <Footer />
    </div>
  )
}

export default Home
