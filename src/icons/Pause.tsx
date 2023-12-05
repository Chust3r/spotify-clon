import { cn } from '../utils/cn'

type IconProps = {
	className?: string
}

const Pause = ({ className }: IconProps) => {
	return (
		<svg
			data-encore-id='icon'
			role='img'
			aria-hidden='true'
			viewBox='0 0 16 16'
			className={cn("fill-foreground w-6 h-6",className)}
		>
			<path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'></path>
		</svg>
	)
}

export default Pause
