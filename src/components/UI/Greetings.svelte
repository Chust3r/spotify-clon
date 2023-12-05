<script>
	const hours = new Date().getHours()

	let greeting

	if (hours >= 3 && hours < 12) {
		greeting = 'Buenos días'
	} else if (hours >= 12 && hours < 19) {
		greeting = 'Buenas tardes'
	} else {
		greeting = 'Buenas noches'
	}
</script>

<div>
	<h2 class="text-white font-bold text-3xl px-4">{greeting}</h2>
</div>
