export type Song = {
	id: number
	title: string
	thumbnail: string
	authors: string[]
	src: string
}

const songs_HIVE: Song[] = [
	{
		id: 1,
		title: 'PARAMOUR (feat. AURORA)',
		authors: ['Sub Urban', 'AURORA'],
		src: '/music/01/Sub Urban   PARAMOUR (feat AURORA) [Official Visualizer[1].mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e026c7e533d11bc12bb07d1a257',
	},
	{
		id: 2,
		title: 'UH OH!',
		authors: ['Sub Urban'],
		src: '/music/01/Sub Urban   UH OH! (feat BENEE) [Official Music Video.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e026c7e533d11bc12bb07d1a257',
	},
]

const songs_PESO_PLUMA: Song[] = [
	{
		id: 1,
		title: 'Delivery',
		authors: ['Peso Pluma', 'Alemán'],
		src: '/music/03/Delivery   Peso Pluma x Alemán (Video Oficial.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e02ddd7cbb6b1548385fc06f75c',
	},
	{
		id: 2,
		title: 'Ella Baila Sola',
		authors: ['Eslabon Armado', 'Peso Pluma', 'DEL Records'],
		src: '/music/03/Ella Baila Sola   (Video Oficial)   Eslabon Armado y Peso Pluma   DEL Records 202.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b2732071a0c79802d9375a53bfef',
	},
	{
		id: 3,
		title: 'La Bebe - Remix',
		authors: ['Peso Pluma', 'Yng Lvcas'],
		src: '/music/03/Yng Lvcas u0026 Peso Pluma   La Bebe (Remix) [Video Oficial.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e02a04be3ad7c8c67f4109111a9',
	},
]

const songs_BELLA_POARCH: Song[] = [
	{
		id: 1,
		title: 'Build a Btch',
		authors: ['Bella Poarch'],
		src: '/public/music/04/BellaPoarchBuild a Btch.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e02aeeb722667c831a4f5429ff0',
	},
]

export { songs_HIVE, songs_PESO_PLUMA, songs_BELLA_POARCH }
