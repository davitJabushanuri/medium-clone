import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings.t'

interface Props {
	post: [Post]
}

const Home = (props: Props) => {
	const { posts } = props
	return (
		<div className='min-h-screen'>
			<Head>
				<title>Medium</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Hero />
			<Posts posts={posts} />
		</div>
	)
}

export default Home

export const getServerSideProps = async () => {
	const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
  name,
  image
 },
 description,
 mainImage,
 slug
}`

	const posts = await sanityClient.fetch(query)
	return {
		props: {
			posts,
		},
	}
}
