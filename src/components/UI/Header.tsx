const Icon = ({ className }: { className?: string }) => {
	return (
		<svg
			role='img'
			aria-hidden='true'
			className={`w-4 h-4 fill-foreground ${className}`}
			viewBox='0 0 16 16'
		>
			<path d='M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z'></path>
		</svg>
	)
}

const Header = () => {
	return (
		<header className='h-16  w-full bg-transparent flex items-center px-4 sticky top-0 z-10'>
			<nav className='flex gap-3 items-center justify-between'>
				<button className='bg-background/50 rounded-full w-8 h-8 grid place-content-center '>
					<Icon />
				</button>
				<button className='bg-background/50 rounded-full w-8 h-8 grid place-content-center'>
					<Icon className='rotate-180' />
				</button>
			</nav>
		</header>
	)
}

export default Header
