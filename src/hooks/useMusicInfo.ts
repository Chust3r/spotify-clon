import { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { musicStore } from '@stores/music'
import type { Song } from 'src/types/types'

const useMusicInfo = () => {
	const { songs, current } = useStore(musicStore)

	const [musicInfo, setMusicInfo] = useState<Song>(songs[current])

	useEffect(() => {
		setMusicInfo(songs[current])
	}, [])

	useEffect(() => {
		setMusicInfo(songs[current])
	}, [songs, current])

	return musicInfo
}

export default useMusicInfo
