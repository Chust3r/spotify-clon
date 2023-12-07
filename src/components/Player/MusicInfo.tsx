import { useStore } from '@nanostores/react'
import { musicStore } from '@stores/music'

const MusicInfo = () => {
	const { songs, current } = useStore(musicStore)

	const { authors, thumbnail, title } = songs[current]

	return (
		<div className='pl-2 min-w-[250px] w-[430px] flex gap-4 relative overflow-hidden'>
			<div
				className='absolute right-0 bg-gradient-to-l from-black w-10 h-full'
				role='img'
			/>
			<img src={thumbnail} alt={title} className='w-14 h-14 rounded ' />
			<div className='flex flex-col justify-center gap-1'>
				<p className='text-white text-xs md:text-sm font-sans truncate overflow-hidden'>
					{title}
				</p>
				<span className='text-foreground text-[11px] tracking-wide truncate overflow-hidden'>
					{authors.join(',')}
				</span>
			</div>
		</div>
	)
}

export default MusicInfo
