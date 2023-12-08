import { useState } from 'react'
import { setVolume } from '@stores/music'
import { Volume } from '@icons/index'
import Slider from '@components/Player/Slider'
import useMusicData from '@hooks/useMusicData'

const SControls = () => {
	const [prevVolume, setPrevVolume] = useState(100)

	const { volume } = useMusicData()

	return (
		<div className='min-w-[150px] w-[430px] flex items-center justify-end pr-5 gap-2'>
			<button
				onClick={() => {
					if (volume === 0) {
						setVolume(prevVolume / 100)
					} else {
						setVolume(0)
					}
				}}
			>
				<Volume
					value={volume * 100}
					className='hover:fill-white transition-all'
				/>
			</button>
			<Slider
				className='w-[100px]'
				min={0}
				max={100}
				value={[volume * 100]}
				onValueChange={(value) => {
					setVolume(value[0] / 100)
					setPrevVolume(value[0])
				}}
			/>
		</div>
	)
}

export default SControls
