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
}) => {
	return (
		<Link href={link}>
			<main>
				<div>
					<div>
						<img src={authorImg._ref} alt='' />
						<p>{author}</p>
					</div>

					<h1>{title}</h1>
					<p>{description}</p>
				</div>
				<div>
					<img src={urlFor(postImage).url()} alt='' />
				</div>
			</main>
		</Link>
	)
}

export default Post
