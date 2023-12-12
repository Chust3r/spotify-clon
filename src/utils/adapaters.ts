import type { Artists, ArtistDeezer, DataDeezer, Songs } from 'src/types/types'

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

export const adapterArtists = (artists: ArtistDeezer[]): Artists => {
	const data: Artists = artists.map((artist) => ({
		id: artist.id,
		name: artist.name,
		thumbnail: artist.picture_big,
		songs: [],
	}))

	return data
}
