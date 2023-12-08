import { useRef } from 'react'
import { useAudio } from '@hooks/useAudio'
import Slider from './Slider'
import { nextSong, prevSong, setPlay } from '@stores/music'
import { Back, Play, Pause, Next } from '@icons/index'
import { format } from '@utils/format'
import useMusicData from '@hooks/useMusicData'

const iconClassNames = 'fill-black w-4 h-4'
const btnClassNames = 'disabled:cursor-not-allowed disabled:opacity-70'

const Controls = () => {
	const audioRef = useRef<HTMLAudioElement>()
	const musicData = useMusicData()

	const handlePlay = () => {
		setPlay(!musicData.isPlay)
	}

	const { duration, progress, setPosition } = useAudio({
		ref: audioRef,
		options: {
			id: musicData.id,
			play: musicData.isPlay,
			src: musicData.songs[musicData.current].src,
			volume: musicData.volume,
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
						disabled={!musicData.prevSong}
						className={btnClassNames}
					>
						<Back />
					</button>
					<button
						className='w-8 h-8 rounded-full bg-white grid place-content-center hover:scale-105 transition-all duration-300'
						onClick={handlePlay}
					>
						{musicData.isPlay && <Pause className={iconClassNames} />}
						{!musicData.isPlay && <Play className={iconClassNames} />}
					</button>
					<button
						onClick={nextSong}
						disabled={!musicData.nextSong}
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
