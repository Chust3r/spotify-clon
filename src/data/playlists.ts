import {
	type Song,
	songs_HIVE,
	songs_PESO_PLUMA,
	songs_BELLA_POARCH,
} from './songs'
export type Playlist = {
	id: string
	title: string
	thumbnail: string
	author: string
	type: string
	songs: Song[]
	color: string
}

console.log(songs_BELLA_POARCH)

export const playlists: Playlist[] = [
	{
		id: '1',
		title: 'HIVE',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b2734706cc6a9b666c0488f1f325',
		author: 'Sub Urban',
		type: 'Álbum',
		songs: songs_HIVE,
		color: 'bg-red-900',
	},
	{
		id: '2',
		title: 'Peso Pluma Mix',
		thumbnail:
			'https://seed-mix-image.spotifycdn.com/v6/img/artist/12GqGscKJx3aE4t07u7eVZ/es-419/default',
		author: 'Spotify',
		type: 'Playlist',
		songs: songs_PESO_PLUMA,
		color: 'bg-gradient-to-r from-neutral-600/50',
	},
	{
		id: '3',
		title: 'Build a Bitch',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e02aeeb722667c831a4f5429ff0',
		author: 'Bella Poarch',
		type: 'Álbum',
		songs: songs_BELLA_POARCH,
		color: 'bg-rose-500/60',
	},
	{
		id: '4',
		title: 'Odisea',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b273b0a875d7f1bfe4ec4aaffa48',
		author: 'Ozuna',
		type: 'Álbum',
		songs: songs_HIVE,
		color: 'bg-gradient-to-r from-white/50 via-gray-100/50 to-white/50',
	},
	{
		id: '5',
		title: 'Colores',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b27335692baca45542527d742d0d',
		author: 'J Balvin',
		type: 'Álbum',
		songs: songs_HIVE,
		color: 'bg-gradient-to-r from-red-400/50 via-gray-300/70 to-blue-500/50',
	},
]
