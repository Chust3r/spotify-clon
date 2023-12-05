import { useState, useEffect, type MutableRefObject } from 'react'

interface UseAudioProps {
	src: string
	id: string
	ref: MutableRefObject<HTMLAudioElement>
	onEnd?: () => void
}

export const useAudio = ({ id, ref, src, onEnd }: UseAudioProps) => {
	const [duration, setDuration] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [isPlay, setIsplay] = useState(false)
	const [progress, setProgress] = useState(0)
	const [volume, setVolume] = useState(0.1)

	useEffect(() => {
		setLoaded(true)
		ref.current.src = src
		ref.current.volume = volume
		ref.current.onloadedmetadata = () => {
			setDuration(ref.current.duration)
		}
		ref.current.ontimeupdate = () => {
			setProgress(ref.current.currentTime)
		}
		ref.current.onended = () => {
			if (onEnd) {
				onEnd()
			}
		}
		ref.current.onplay = () => {
			setIsplay(true)
		}
	}, [])

	useEffect(() => {
		ref.current.src = src
		ref.current.autoplay = true
	}, [src, id])

	// → actions

	const play = () => {
		if (loaded) {
			if (isPlay) {
				ref.current.pause()
				setIsplay(false)
			} else {
				ref.current.play()
				setIsplay(true)
			}
		}
	}

	const updateVolume = (volume: number) => {
		if (loaded) {
			ref.current.volume = volume
			setVolume(volume)
		}
	}

	const updatePosition = (newPosition: number) => {
		if (loaded) {
			ref.current.currentTime = newPosition
		}
	}

	const actions = {
		play,
		setVolume: updateVolume,
		setPosition: updatePosition,
	}

	const info = { progress, duration, volume, isPlay }

	return { actions, info }
}
