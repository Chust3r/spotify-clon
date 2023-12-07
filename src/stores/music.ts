import { map } from 'nanostores'
import { songs_HIVE, type Song } from 'src/data/songs'

interface MusicStore {
	id: string
	songs: Song[]
	current: number
	nextSong: boolean
	prevSong: boolean
	isPlay: boolean
	volume: number
}

export const musicStore = map<MusicStore>({
	id: '1',
	songs: songs_HIVE,
	current: 0,
	nextSong: true,
	prevSong: false,
	isPlay: false,
	volume: 1,
})

const checkQueue = (index: number) => {
	const songs = musicStore.get().songs

	const isNextSong = index < songs.length - 1
	const isPrevSong = index > 0

	return {
		isNextSong,
		isPrevSong,
	}
}

export const setSongs = (songs: Song[], id: string) => {
	const { isNextSong, isPrevSong } = checkQueue(0)

	musicStore.set({
		id,
		songs,
		current: 0,
		isPlay: true,
		volume: 1,
		nextSong: songs.length === 1 ? false : isNextSong,
		prevSong: songs.length === 1 ? false : isPrevSong,
	})
}

export const nextSong = () => {
	const store = musicStore.get()

	if (store.nextSong) {
		musicStore.setKey('current', store.current + 1)
	} else {
		musicStore.setKey('isPlay', false)
	}

	const { isNextSong, isPrevSong } = checkQueue(store.current + 1)

	musicStore.setKey('nextSong', isNextSong)
	musicStore.setKey('prevSong', isPrevSong)
}

export const prevSong = () => {
	const store = musicStore.get()

	if (store.prevSong) {
		musicStore.setKey('current', store.current - 1)
	}

	const { isNextSong, isPrevSong } = checkQueue(store.current - 1)

	musicStore.setKey('nextSong', isNextSong)
	musicStore.setKey('prevSong', isPrevSong)
}

export const setPlay = (isPlay: boolean) => {
	musicStore.setKey('isPlay', isPlay)
}

export const setVolume = (volume: number) => {
	musicStore.setKey('volume', volume)
}