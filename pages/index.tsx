import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
	return (
		<div className='flex min-h-screen'>
			<Head>
				<title>Medium</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
		</div>
	)
}

export default Home