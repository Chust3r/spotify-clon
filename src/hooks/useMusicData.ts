import { useStore } from '@nanostores/react'
import { type MusicStore, musicStore } from '@stores/music'
import { useEffect, useState } from 'react'

const useMusicData = () => {
	const store = useStore(musicStore)

	const [musicData, setMusicData] = useState<MusicStore>(store)

	useEffect(() => {
		setMusicData(store)
	}, [])

	useEffect(() => {
		setMusicData(store)
	}, [
		store.current,
		store.id,
		store.isPlay,
		store.isPlay,
		store.nextSong,
		store.prevSong,
		store.volume,
	])

	return musicData
}

export default useMusicData
