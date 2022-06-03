import Link from 'next/link'

const Header = () => {
	return (
		<header className='h-20 w-screen flex items-center space-x-5 justify-end px-6 border-b border-black'>
			<div className='mr-auto'>
				<Link href='/'>
					<img
						className='w-44 object-contain'
						src='https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'
						alt=''
					/>
				</Link>
			</div>

			<div className='hidden md:flex items-center gap-7'>
				<h3>
					<Link href='/story'>Our story</Link>
				</h3>
				<h3>
					<Link href='/membership'>Membership</Link>
				</h3>
				<h3>
					<Link href='/write'>Write</Link>
				</h3>
			</div>

			<div className='flex items-center gap-7'>
				<h3>
					<Link href='/signin'>Sign in</Link>
				</h3>
				<h3 className='text-white bg-black px-4 py-2 rounded-full'>
					<Link href='/getStarted'>Get started</Link>
				</h3>
			</div>
		</header>
	)
}

export default Header
