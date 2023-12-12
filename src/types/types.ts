export type Playlist = {
	id: string
	title: string
	thumbnail: string
	author: string
	type: string
	songs: Song[]
	color: string
}

export type Playlists = Playlist[]

export type Song = {
	id: number
	title: string
	thumbnail: string
	authors: string[]
	src: string
	album: string
	duration: number
	isExplicit: boolean
}

export type Songs = Song[]

export type Artist = {
	id: number
	name: string
	thumbnail: string
	songs: Songs
}

export type Artists = Artist[]

export interface Main {
	data: DataDeezer[]
	total: number
}

export interface DataDeezer {
	id: number
	title: string
	title_short: string
	title_version: string
	link: string
	duration: number
	rank: number
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	preview: string
	md5_image: string
	position: number
	artist: Artist
	album: Album
	type: DatumType
}

interface Album {
	id: number
	title: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	tracklist: string
	type: AlbumType
}

enum AlbumType {
	Album = 'album',
}

export interface ArtistDeezer {
	id: number
	name: string
	link: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	radio: boolean
	tracklist: string
	type: ArtistType
}

enum ArtistType {
	Artist = 'artist',
}

enum DatumType {
	Track = 'track',
}

export interface MainArtist {
	data: DataArtist[]
	total: number
}

export interface DataArtist {
	id: number
	name: string
	link: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	radio: boolean
	tracklist: string
	position: number
	type: Type
}

export enum Type {
	Artist = 'artist',
}

