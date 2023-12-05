import { cn } from '@utils/cn'

interface BoxProps {
	className?: string
	children: React.ReactNode
}

const Box = ({ className, children }: BoxProps) => {
	return (
		<div className={cn('bg-background px-2 py-3', className)}>{children}</div>
	)
}

export default Box
