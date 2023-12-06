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

const updateQueue = (songs: any[], index: number) => {
	const isNextSong = index < songs.length - 1
	const isPrevSong = index > 0
	musicStore.setKey('nextSong', isNextSong)
	musicStore.setKey('prevSong', isPrevSong)
}

export const setSongs = (songs: Song[], id: string) => {
	musicStore.setKey('songs', songs)
	musicStore.setKey('id', id)
	musicStore.setKey('current', 0)
	updateQueue(songs, 0)
}

export const nextSong = () => {
	const store = musicStore.get()
	if (store.nextSong) {
		musicStore.setKey('current', store.current + 1)
	}
	updateQueue(store.songs, store.current + 1)
}

export const prevSong = () => {
	const store = musicStore.get()
	if (store.prevSong) {
		musicStore.setKey('current', store.current - 1)
	}
	updateQueue(store.songs, store.current - 1)
}

export const setPlay = (isPlay: boolean) => {
	musicStore.setKey('isPlay', isPlay)
}

export const setVolume = (volume: number) => {
	musicStore.setKey('volume', volume)
}