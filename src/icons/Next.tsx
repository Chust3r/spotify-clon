import { cn } from '../utils/cn'

type IconProps = {
	className?: string
}

const Next = ({ className }: IconProps) => {
	return (
		<svg
			aria-hidden='true'
			viewBox='0 0 16 16'
			className={cn('w-4 h-4 fill-foreground', className)}
		>
			<path d='M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z'></path>
		</svg>
	)
}

export default Next
