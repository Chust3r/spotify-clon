import {
	type Song,
	songs_HIVE,
	songs_PESO_PLUMA,
	songs_BELLA_POARCH,
	songs_Odisea,
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

export const playlists: Playlist[] = [
	{
		id: 'WsRe63CwTc',
		title: 'HIVE',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b2734706cc6a9b666c0488f1f325',
		author: 'Sub Urban',
		type: 'Álbum',
		songs: songs_HIVE,
		color: 'bg-gradient-to-r from-red-900 to-red-800/30',
	},
	{
		id: 'TMQQmB8RBY',
		title: 'Peso Pluma Mix',
		thumbnail:
			'https://seed-mix-image.spotifycdn.com/v6/img/artist/12GqGscKJx3aE4t07u7eVZ/es-419/default',
		author: 'Spotify',
		type: 'Playlist',
		songs: songs_PESO_PLUMA,
		color: 'bg-gradient-to-r from-neutral-600/50',
	},
	{
		id: 'LehK3kN1y9',
		title: 'Bella Poarch',
		thumbnail:
			'https://i.scdn.co/image/ab6761610000e5eb82c3ba21822db2c7cb5e5ba7',
		author: 'Bella Poarch',
		type: 'Álbum',
		songs: songs_BELLA_POARCH,
		color: 'bg-gradient-to-l from-green-500/50 to-lime-500/80',
	},
	{
		id: 'kjIJScMWdN',
		title: 'Odisea',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b273b0a875d7f1bfe4ec4aaffa48',
		author: 'Ozuna',
		type: 'Álbum',
		songs: songs_Odisea,
		color: 'bg-gradient-to-r from-white/50 via-gray-100/50 to-white/50',
	},
]
