<script>

	import Typewriter from "svelte-typewriter" //https://github.com/henriquehbr/svelte-typewriter
	import logo from '$lib/images/cwb.svg';
	let alt = 'CWB.ORG.UK Logo';
	function myFun() {
		alert('Ciao Man')
	}
	/*export let f1, f2, f3, f4, f5, f6, f7 = false;
		class:f1={f1}
	class:f2={f2}
	class:f3={f3}
	class:f4={f4}
	class:f5={f5}
	class:f6={f6}
	class:f7={f7}
	*/
</script>




<a href="/" class="link no-underline">
<!--
<div class="flex items-center fw9 light-pink no-clutter">
	<div class="w-third">
	</div>
	<div class="w-two-thirds">
		<img
			style="width:4vw"
			class="dib mt1 mb1 no-select v-top pl1"
			src={logo} alt="logo"
		/>
	</div>
</div>
-->
<div class="flex items-center fw9 red no-clutter"
><!-- debug -->
  <div class="w-third tr">
	<!-- interval={[33, 55, 88]} -->
	<!-- on:done={() => myFun()} -->
	<!-- prime numbers 1-100 -->
	<Typewriter loopRandom cursor={false} interval={[11, 23, 71]}>
			<span class="ttu tracked o-70">Capacity</span>
			<span class="ttu tracked o-70">Courage</span>
			<span class="ttu tracked o-70">Courses</span>
			<span class="ttu tracked o-70">Courage</span>
			<span class="ttu tracked o-70">Courses</span>
			<span class="ttu tracked o-70">Care</span>
			<span class="ttu tracked o-70">Courage</span>
			<span class="ttu tracked o-70">Courses</span>

			<span class="ttu tracked o-70">Capacity</span>
			<span class="ttu tracked o-70">Courage</span>
			<span class="ttu tracked o-70">Courses</span>
			<span class="ttu tracked o-70">Courage</span>
			<span class="ttu tracked o-70">Courses</span>
			<span class="ttu tracked o-70">Care</span>
			<span class="ttu tracked o-70">Courage</span>
			<span class="ttu tracked o-70">Courses</span>

			<span class="ttu tracked o-100">Clowns</span>
	</Typewriter>
  </div>
	<div class="w-two-thirds">
    <span class="ttu tracked o-100">&nbsp;Without&nbsp;Borders</span>
  </div>
</div>
</a>