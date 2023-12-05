import { useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { useAudio } from 'src/hooks/useAudio'
import Slider from './Slider'
import { musicStore, nextSong, prevSong } from 'src/stores/music'
import Play from '@icons/Play'
import Pause from '@icons/Pause'
import Back from '@icons/Back'
import Next from '@icons/Next'
import { format } from '@utils/format'
import Volume from '@icons/Volume'

const iconClassNames = 'fill-black w-4 h-4'

const Controls = () => {
	const store = useStore(musicStore)
	const audioRef = useRef<HTMLAudioElement>()
	const [prevVolume, setPrevVolume] = useState(100)

	const { actions, info } = useAudio({
		id: store.id,
		src: store.songs[store.current].src,
		ref: audioRef,
		onEnd: () => {
			if (store.nextSong) {
				nextSong()
			}
		},
	})

	return (
		<>
			<div className='flex-1 flex flex-col gap-3 w-full h-full items-center justify-center pt-1'>
				<audio ref={audioRef} autoPlay></audio>

				<div className='flex gap-5'>
					<button onClick={prevSong}>
						<Back />
					</button>
					<button
						className='w-8 h-8 rounded-full bg-white grid place-content-center hover:scale-105 transition-all duration-300'
						onClick={actions.play}
					>
						{info.isPlay ? (
							<Pause className={iconClassNames} />
						) : (
							<Play className={iconClassNames} />
						)}
					</button>
					<button onClick={nextSong}>
						<Next />
					</button>
				</div>

				<div className='flex items-center gap-1'>
					<div className='w-7 text-foreground text-xs text-center'>
						<span>{format(info.progress)}</span>
					</div>
					<Slider
						className='w-[200px] md:w-[300px] lg:w-[450px] transition-all'
						min={0}
						max={info.duration}
						value={[info.progress]}
						onValueChange={(value) => {
							actions.setPosition(value[0])
						}}
					/>
					<div className='w-7 text-foreground text-xs text-center'>
						<span>{format(info.duration)}</span>
					</div>
				</div>
			</div>
			<div className='min-w-fit w-[430px] flex items-center justify-end pr-5 gap-2'>
				<button
					className='group/slider'
					onClick={() => {
						if (info.volume === 0) {
							actions.setVolume(prevVolume / 100)
						} else {
							actions.setVolume(0)
						}
					}}
				>
					<Volume
						value={info.volume * 100}
						className='hover:fill-white transition-all'
					/>
				</button>
				<Slider
					className='w-[100px]'
					min={0}
					max={100}
					value={[info.volume * 100]}
					onValueChange={(value) => {
						actions.setVolume(value[0] / 100)
						setPrevVolume(value[0])
					}}
				/>
			</div>
		</>
	)
}

export default Controls
