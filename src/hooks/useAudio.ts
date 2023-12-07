import { useState, useEffect, type MutableRefObject } from 'react'

interface UseAudioProps {
	ref: MutableRefObject<HTMLAudioElement>
	options: {
		id: string
		src: string
		volume?: number
		play?: boolean
		autoplay?: boolean
		onEnded?: () => void
	}
}

export const useAudio = ({ ref, options }: UseAudioProps) => {
	const { id, src, volume, play, autoplay, onEnded } = options

	const [duration, setDuration] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		setLoaded(true)
		ref.current.src = src
		ref.current.volume = volume || 1
		ref.current.onloadedmetadata = () => {
			setDuration(ref.current.duration)
		}
		ref.current.ontimeupdate = () => {
			setProgress(ref.current.currentTime)
		}
		ref.current.onended = () => {
			onEnded()
		}
	}, [])

	useEffect(() => {
		ref.current.src = src
		if (options.play) {
			ref.current.autoplay = autoplay || false
		} else {
			ref.current.autoplay = false
		}
	}, [src, id])

	useEffect(() => {
		ref.current.volume = volume ?? 1
	}, [volume])

	useEffect(() => {
		if (play) {
			ref.current.play()
		} else {
			ref.current.pause()
		}
	}, [play])

	// → actions

	const updatePosition = (newPosition: number) => {
		if (loaded) {
			ref.current.currentTime = newPosition
		}
	}

	return { setPosition: updatePosition, progress, duration }
}
