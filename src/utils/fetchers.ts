import { adapterDeezer, adapterArtists } from './adapaters'

const base = 'https://api.deezer.com'

async function fetchData(endpoint: string) {
	const response = await fetch(base + endpoint)
	const data = await response.json()

	return data
}

export async function fetchTrack(id: string) {
	const endpoint = `/track/${id}`
	const data = await fetchData(endpoint)

	return data
}

export async function fetchTopTracks({ limit = 10 } = {}) {
	const endpoint = `/chart/0/tracks?limit=${limit}`
	const { data } = await fetchData(endpoint)

	return adapterDeezer(data)
}

export async function fetchTopArtists({ limit = 3 } = {}) {
	const endpoint = `/chart/0/artists?limit=${limit}`

	const { data } = await fetchData(endpoint)

	const promises = data.map((artist) => fetchArtist(artist.id))
	const topArtists = await Promise.all(promises)

	return adapterArtists(topArtists)
}

export async function fetchTopPlaylists() {
	const endpoint = `/chart/0/playlists`
	const { data } = await fetchData(endpoint)

	return data
}

export async function fetchArtist(id) {
	const endpoint = `/artist/${id}`
	const data = await fetchData(endpoint)

	return data
}

export async function fetchArtistTopTracks(id: number) {
	const endpoint = `/artist/${id}/top`
	const { data } = await fetchData(endpoint)

	return adapterDeezer(data)
}


