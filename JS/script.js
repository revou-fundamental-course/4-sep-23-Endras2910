<script type="text/javascript">
	const sisi = document.getElementById('sisi')
	const hitungluas = document.getElementById('hitungluas')
	const outputluas = document.getElementById('outputluas')
	hitungluas.addEventListener('click', function(){
		let x = sisi.value
		let y = x*x
		outputluas.innerHTML = `Luas persegi dari sisi ${x} cm adalah ${y} cm2`
	})

	const sisi2 = document.getElementById('sisi2')
	const hitungkel = document.getElementById('hitungkel')
	const outputkel = document.getElementById('outputkel')
	hitungkel.addEventListener('click', function(){
		let m = sisi2.value
		let n = 4*m
		outputkel.innerHTML = `Keliling persegi dari sisi ${m} cm adalah ${n} cm2`
	})
</script>
