import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const Post = ({
	link,
	authorImg,
	author,
	title,
	description,
	postImage,
	slug,
}: any) => {
	return (
		<Link className='' href={link}>
			<main className='grid grid-cols-3 gap-4 max-w-3xl mb-6 cursor-pointer'>
				<div className='col-span-2'>
					<div className='flex gap-2 mb-3'>
						<img
							className='w-5 h-5 rounded-full'
							src={urlFor(authorImg).url()}
							alt=''
						/>
						<p className='font-medium text-xs'>{author}</p>
					</div>

					<h1 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2'>
						{title}
					</h1>
					<p className='hidden sm:block text-gray-500 text-base md:text-lg'>
						{description}
					</p>
				</div>
				<div className='w-full'>
					<img
						className=' aspect-square md:aspect-video object-cover'
						src={urlFor(postImage).url()}
						alt=''
					/>
				</div>
			</main>
		</Link>
	)
}

export default Post
