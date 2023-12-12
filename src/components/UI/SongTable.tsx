import { format } from '@utils/format'

interface Props {
	thumbnail: string
	authors: string[]
	album: string
	duration: number
	title: string
	index: number
	playlist: string
}

const SongTable = ({
	album,
	authors,
	duration,
	thumbnail,
	title,
	index,
}: Props) => {
	return (
		<tr className='hover:bg-neutral-800/50 transition duration-300 rounded cursor-pointer'>
			<th className='w-11 font-normal py-4 rounded-l-md'>{index + 1}</th>
			<th className='w-[500px] text-left font-normal '>
				<div className='flex gap-3 items-center '>
					<img src={thumbnail} alt='' className='w-10 h-10 rounded' />
					<div className='flex flex-col '>
						<p className='text-sm text-white'>{title}</p>
						<p className='text-xs'>{authors.join(',')}</p>
					</div>
				</div>
			</th>
			<th className='w-80 h-10 text-left text-sm py-4 font-normal hidden lg:block'>
				{album}
			</th>
			<th className='w-20 text-center font-normal rounded-r-md'>
				{format(duration)}
			</th>
		</tr>
	)
}

export default SongTable
