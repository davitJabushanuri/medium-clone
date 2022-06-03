import React from 'react'

const Hero = () => {
	return (
		<section className='px-8 py-20 bg-yellow-500 border-b border-black'>
			<div className='flex-row gap-10'>
				<h1 className='text-6xl md:text-8xl lg:text-10xl mb-10'>
					Stay curious.
				</h1>
				<p className='text-2xl mb-10 max-w-sm'>
					Discover stories, thinking, and expertise from writers on any topic.
				</p>
				<button className='text-xl text-white bg-black px-10 py-2 rounded-full'>
					Start reading
				</button>
			</div>
		</section>
	)
}

export default Hero
