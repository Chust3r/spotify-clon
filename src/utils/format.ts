//→ a function that format seconds to minutes and seconds in a common time format

const addZero = (number: number): string => {
	return number >= 10 ? `${number}` : `0${number}`
}

export const format = (seconds: number) => {
	const mins = Math.floor(seconds / 60)

	const secs = Math.floor(seconds % 60)

	const secondsFormated = `${mins}:${addZero(secs)}`

	return secondsFormated
}
