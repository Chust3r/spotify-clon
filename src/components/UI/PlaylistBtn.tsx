import type { Song } from 'src/types/types.ts'
import { useState, useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { musicStore, setPlay } from '../../stores/music.ts'
import { setSongs } from 'src/stores/music'
import { cn } from '@utils/cn'
import { Play, Pause } from '@icons/index'

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
	const iconStyles = cn('w-4 h-4 fill-black stroke-black ', iconClasses)

	const store = useStore(musicStore)

	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		if (id === store.id) {
			if (store.isPlay) {
				setPlay(false)
			} else {
				setPlay(true)
			}
		} else {
			setSongs(songs, id)
			setPlay(true)
		}
	}

	useEffect(() => {
		setIsActive(id === store.id && store.isPlay)
	}, [store.id, store.isPlay])

	return (
		<div
			role='button'
			className={cn(
				'rounded-full bg-primary grid place-content-center w-8 h-8 shadow-xl shadow- hover:scale-105 ',
				wrapperClasses,
				{
					'opacity-100': isActive,
				}
			)}
			onClick={handleClick}
		>
			{!isActive ? (
				<Play className={iconStyles} />
			) : (
				<Pause className={iconStyles} />
			)}
		</div>
	)
}

export default PlaylistBtn
