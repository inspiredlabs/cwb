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
<div class="flex items-center fw9 red no-clutter">
  <div class="w-two-thirds tr h2 ">
	<!-- interval={[33, 55, 88]} -->
	<!-- on:done={() => myFun()} -->
	<!-- prime numbers 1-100 -->
	<!-- developers.google.com/search/docs/advanced/robots/robots_meta_tag -->
	<Typewriter loopRandom cursor={false} interval={[11, 23, 97]}>
			<span class="ttu tracked o-70" data-nosnippet>Capacity</span>
			<span class="ttu tracked o-70" data-nosnippet>Courage</span>
			<span class="ttu tracked o-70" data-nosnippet>Courses</span>
			<span class="ttu tracked o-70" data-nosnippet>Care</span>
			<span class="ttu tracked o-100">Clowns</span>
	</Typewriter>
  </div>
	<div class="w-auto h2">
    <span class="ttu tracked o-100">&nbsp;Without&nbsp;Borders</span>
  </div>
</div>
</a>

<!-- <style>
	.gradient {
		color: rgba(255,65,54,1);/* #ff4136 from: cssgradient.io */
		background: linear-gradient(270deg, rgba(255,65,54,1) 50%, rgba(255,255,255,1) 100%);
  -webkit-background-clip: text; /* https://css-tricks.com/snippets/css/gradient-text/ */
  -webkit-text-fill-color: transparent;
	}
</style> -->