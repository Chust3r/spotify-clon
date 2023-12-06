import { useStore } from '@nanostores/react'
import { useState } from 'react'
import { musicStore, setVolume } from 'src/stores/music'
import Volume from '@icons/Volume'
import Slider from '@components/Player/Slider'

const SControls = () => {
	const [prevVolume, setPrevVolume] = useState(100)
	const store = useStore(musicStore)

	return (
		<div className='min-w-[150px] w-[430px] flex items-center justify-end pr-5 gap-2'>
			<button
				onClick={() => {
					if (store.volume === 0) {
						setVolume(prevVolume / 100)
					} else {
						setVolume(0)
					}
				}}
			>
				<Volume
					value={store.volume * 100}
					className='hover:fill-white transition-all'
				/>
			</button>
			<Slider
				className='w-[100px]'
				min={0}
				max={100}
				value={[store.volume * 100]}
				onValueChange={(value) => {
					setVolume(value[0] / 100)
					setPrevVolume(value[0])
				}}
			/>
		</div>
	)
}

export default SControls
