import { forwardRef } from 'react'
import type { ElementRef, ComponentPropsWithoutRef } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@utils/cn'

const Slider = forwardRef<
	ElementRef<typeof SliderPrimitive.Root>,
	ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex w-full touch-none select-none items-center group',
			className
		)}
		{...props}
	>
		<SliderPrimitive.Track className='relative h-1 w-full grow overflow-hidden rounded-full bg-foreground/30'>
			<SliderPrimitive.Range className='absolute h-full  bg-white group-hover:bg-primary rounded-full' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className='block h-3 w-3 rounded-full bg-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 opacity-0 group-hover:opacity-100' />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export default Slider
