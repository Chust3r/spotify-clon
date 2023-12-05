import Play from '@icons/Play'
import { cn } from '@utils/cn'
import type { Song } from 'src/data/songs'
import { setSongs } from 'src/stores/music'

interface PlayBtnProps {
	songs: Song[]
	id: string
	wrapperClasses?: string
	iconClasses?: string
}

const PlaylistBtn = ({
	songs,
	id,
	iconClasses,
	wrapperClasses,
}: PlayBtnProps) => {
	const handleClick = () => {
		setSongs(songs, id)
	}

	return (
		<div
			role='button'
			className={cn(
				'rounded-full bg-primary grid place-content-center w-8 h-8 shadow-xl shadow- hover:scale-105 transition-all duration-300',
				wrapperClasses
			)}
			onClick={handleClick}
		>
			<Play className={cn('w-4 h-4 fill-black stroke-black', iconClasses)} />
		</div>
	)
}

export default PlaylistBtn
