import { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import PortableText from 'react-portable-text'

const Post = ({ post }: any) => {
	console.log(post)
	return (
		<main>
			<Header />
			<div className='flex justify-center px-4 py-8'>
				<div className='w-screen max-w-2xl'>
					<div className='flex gap-4'>
						<div>
							<img
								className='w-12 h-12'
								src={urlFor(post.author.image).url()}
								alt=''
							/>
						</div>
						<div>
							<p>{post.author.name}</p>
							<p>{new Date(post._createdAt).toLocaleDateString()}</p>
						</div>
					</div>
					<div className='mt-4'>
						<h1 className='text-2xl font-bold'>{post.title}</h1>
						<p className='mt-2 text-lg text-gray-500'>{post.description}</p>
						<img
							className='my-6 aspect-video object-cover'
							src={urlFor(post.mainImage).url()}
							alt=''
						/>
						<div>
							<PortableText
								dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}
								projectId={
									process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5wv6dati'
								}
								content={post.body}
								serializers={{
									h1: (props: any) => (
										<h1 className='text-2xl font-bold my-5' {...props} />
									),
									h2: (props: any) => (
										<h1 className='text-xl font-bold my-5' {...props} />
									),
									li: ({ children }: any) => (
										<li className='list-disc ml-5'>{children}</li>
									),
									link: ({ href, children }: any) => (
										<a href={href} className='text-blue-500 hover-underline'>
											{children}
										</a>
									),
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Post

export const getStaticPaths = async () => {
	const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`

	const posts = await sanityClient.fetch(query)

	const paths = posts.map(post => ({
		params: {
			slug: post.slug.current,
		},
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
      name,
      image
    },
    'comments': *[_type == "comment" && post._ref == ^._id && approved == true],
    description,
    mainImage,
    slug,
    body
  }`

	const post = await sanityClient.fetch(query, {
		slug: params?.slug,
	})

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post,
		},
		revalidate: 60,
	}
}
