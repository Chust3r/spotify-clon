import { useRef } from 'react'
import { useStore } from '@nanostores/react'
import { useAudio } from '@hooks/useAudio'
import Slider from './Slider'
import { musicStore, nextSong, prevSong, setPlay } from '@stores/music'
import Play from '@icons/Play'
import Pause from '@icons/Pause'
import Back from '@icons/Back'
import Next from '@icons/Next'
import { format } from '@utils/format'

const iconClassNames = 'fill-black w-4 h-4'
const btnClassNames = 'disabled:cursor-not-allowed disabled:opacity-70'

const Controls = () => {
	const store = useStore(musicStore)
	const audioRef = useRef<HTMLAudioElement>()

	const handlePlay = () => {
		setPlay(!store.isPlay)
	}

	const { duration, progress, setPosition } = useAudio({
		ref: audioRef,
		options: {
			id: store.id,
			play: store.isPlay,
			src: store.songs[store.current].src,
			volume: store.volume,
			autoplay: true,
			onEnded: nextSong,
		},
	})

	return (
		<>
			<div className='flex-1 flex flex-col gap-3 w-full h-full items-center justify-center pt-1'>
				<audio ref={audioRef}></audio>

				<div className='flex gap-6'>
					<button
						onClick={prevSong}
						disabled={!store.prevSong}
						className={btnClassNames}
					>
						<Back />
					</button>
					<button
						className='w-8 h-8 rounded-full bg-white grid place-content-center hover:scale-105 transition-all duration-300'
						onClick={handlePlay}
					>
						{store.isPlay ? (
							<Pause className={iconClassNames} />
						) : (
							<Play className={iconClassNames} />
						)}
					</button>
					<button
						onClick={nextSong}
						disabled={!store.nextSong}
						className={btnClassNames}
					>
						<Next />
					</button>
				</div>

				<div className='flex items-center gap-1'>
					<div className='w-7 text-foreground text-xs text-center'>
						<span>{format(progress)}</span>
					</div>
					<Slider
						className='w-[200px] md:w-[300px] lg:w-[450px] transition-all'
						min={0}
						max={duration}
						value={[progress]}
						onValueChange={(value) => {
							setPosition(value[0])
						}}
					/>
					<div className='w-7 text-foreground text-xs text-center'>
						<span>{format(duration)}</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Controls
