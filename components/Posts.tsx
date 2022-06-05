import React from 'react'
import { urlFor } from '../sanity'
import Post from './Post'

const Posts = ({ posts }: any) => {
	return (
		<section className='flex justify-center px-4 py-10'>
			<div className='w-screen max-w-7xl grid grid-cols-1 gap-4'>
				{posts.map(post => {
					return (
						<Post
							key={post._id}
							link={`/post/${post.slug.current}`}
							authorImg={post.author.image}
							author={post.author.name}
							title={post.title}
							description={post.description}
							postImage={post.mainImage}
							slug={post.slug}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Posts
