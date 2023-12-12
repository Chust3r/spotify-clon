import type { DataDeezer, Songs } from 'src/types/types'

export const adapterDeezer = (songs: DataDeezer[]): Songs => {
	const data: Songs = songs.map((song) => ({
		title: song.title,
		album: song.album.title,
		authors: [song.artist.name],
		duration: song.duration,
		id: song.id,
		thumbnail: song.album.cover_big,
		src: song.preview,
		isExplicit: song.explicit_lyrics,
	}))

	return data
}
