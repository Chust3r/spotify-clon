export type Song = {
	id: number
	title: string
	thumbnail: string
	authors: string[]
	src: string
	album: string
	duration: `${number}:${number}`
	isExplicit: boolean
}

const songs_HIVE: Song[] = [
	{
		id: 1,
		title: 'PARAMOUR (feat. AURORA)',
		authors: ['Sub Urban', 'AURORA'],
		src: '/music/01/Sub Urban   PARAMOUR (feat AURORA) [Official Visualizer[1].mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e026c7e533d11bc12bb07d1a257',
		album: 'HIVE',
		duration: '2:47',
		isExplicit: false,
	},
	{
		id: 2,
		title: 'UH OH!',
		authors: ['Sub Urban'],
		src: '/music/01/Sub Urban   UH OH! (feat BENEE) [Official Music Video.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e026c7e533d11bc12bb07d1a257',
		album: 'HIVE',
		duration: '2:38',
		isExplicit: false,
	},
	{
		id: 3,
		title: 'Inferno',
		authors: ['Sub Urban', 'Bella Poarch'],
		src: '/music/01/Sub Urban INFERNO.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e026c7e533d11bc12bb07d1a257',
		album: 'HIVE',
		duration: '3:53',
		isExplicit: false,
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
		album: 'Delivery',
		duration: '3:49',
		isExplicit: true,
	},
	{
		id: 2,
		title: 'Ella Baila Sola',
		authors: ['Eslabon Armado', 'Peso Pluma', 'DEL Records'],
		src: '/music/03/Ella Baila Sola   (Video Oficial)   Eslabon Armado y Peso Pluma   DEL Records 202.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b2732071a0c79802d9375a53bfef',
		album: 'DESVELADO',
		duration: '3:08',
		isExplicit: true,
	},
	{
		id: 3,
		title: 'La Bebe - Remix',
		authors: ['Peso Pluma', 'Yng Lvcas'],
		src: '/music/03/Yng Lvcas u0026 Peso Pluma   La Bebe (Remix) [Video Oficial.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e02a04be3ad7c8c67f4109111a9',
		album: 'Sencillo',
		duration: '4:04',
		isExplicit: true,
	},
	{
		id: 4,
		title: 'Lady Gaga',
		authors: ['Peso Pluma', 'Gabito Ballesteros', 'Junior H'],
		src: '/music/03/lady gaga.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e022fb583ed96f8f35cbf2897ba',
		album: 'Génesis',
		duration: '3:33',
		isExplicit: true,
	},
	{
		id: 5,
		title: 'Sentosa',
		authors: ['Peso Pluma', 'Tornillo', 'Polo Gonzalez', 'Garena Free Fire'],
		src: '/music/03/Sentos.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b273a0887b07800af74f7ecb6e1f',
		album: 'Sentosa',
		duration: '2:31',
		isExplicit: true,
	},
]

const songs_BELLA_POARCH: Song[] = [
	{
		id: 1,
		title: 'Build a Btch',
		authors: ['Bella Poarch'],
		src: '/music/04/BellaPoarchBuild a Btch.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e02aeeb722667c831a4f5429ff0',
		album: 'Dolls EP',
		duration: '2:49',
		isExplicit: false,
	},
	{
		id: 2,
		title: 'Living Hell',
		authors: ['Bella Poarch'],
		src: '/music/04/Bella Poarch   Living Hell (Official Music Video[1].mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d00001e026132f812bee6ba5cf4107253',
		album: 'Dolls EP',
		duration: '3:05',
		isExplicit: false,
	},
	{
		id: 3,
		title: 'Crush',
		authors: ['Bella Poarch', 'Lauv'],
		src: 'public/music/04/Bella Poarch Crush.mp3',
		thumbnail:
			'https://static.qobuz.com/images/covers/qc/rg/elx7nwl8grgqc_600.jpg',
		album: 'Crush',
		duration: '2:56',
		isExplicit: false,
	},
]

const songs_Odisea: Song[] = [
	{
		id: 1,
		title: 'Odisea',
		authors: ['Ozuna'],
		src: '/music/05/Odise.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b273b0a875d7f1bfe4ec4aaffa48',
		album: 'Odisea',
		duration: '3:09',
		isExplicit: false,
	},
	{
		id: 2,
		title: 'Bebe (feat. Anuel AA)',
		authors: ['Ozuna', 'Anuel AA'],
		src: '/music/05/Ozuna FT Anuel AA   Bebe (Lyric Video)   Odise.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b273918760935230018b01f7a3f4',
		album: 'Odisea',
		duration: '3:51',
		isExplicit: false,
	},
	{
		id: 2,
		title: 'Tú foto',
		authors: ['Ozuna', 'Anuel AA'],
		src: '/music/05/Tú Fot.mp3',
		thumbnail:
			'https://i.scdn.co/image/ab67616d0000b2735a0467b3a49a461da243c362',
		album: 'Odisea',
		duration: '3:13',
		isExplicit: false,
	},
]

export { songs_HIVE, songs_PESO_PLUMA, songs_BELLA_POARCH, songs_Odisea }
