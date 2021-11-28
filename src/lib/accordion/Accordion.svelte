<script>
	import { slide } from "./Slide.js";
//import { slide } from "svelte/transition";
export let buttonText = "";
export let isOpen = true;
</script>


<span style="letter-spacing:-.025em;" class="f2 f2-ns f1-m f1-l fw8 white cascade pointer hover-accent transition" class:isOpen on:click|self={() => (isOpen = !isOpen)}>{@html buttonText}<span class="cross accent" class:isOpen></span><!-- tracked-tight  -->
<div class="content highlight w-100 br1" use:slide={isOpen} on:animationEnd={() => console.log('Closed')}>
<div class="pa3 f4 fw5 flex flex-column" style="letter-spacing:initial">
	<!-- <strong>{fullText}</strong> -->
	<!-- <strong>{buttonText}</strong> -->
	<slot></slot>
</div>
</div>
</span>


<style>
span.cascade > div { float: left }

.cross:before{
	content:'+';
	top:-3.25px;/*~4px correct!*/
	left:1.3px;/*~3px*/
	position:relative;
}
.cross {
	transform: rotate(0.0turn);
	transition: transform 0.6s 0.01s ease-out;
	display:inline-block;
	border-bottom: none!important;
	will-change: transform;
}

.isOpen {
	transform: rotate(0.25turn);
	color:var(--accent);
	/* 	border-bottom: 9px solid var(--accent); */
}


span {
	transition: color 0.3s 0.5s ease;
}

.content {
	cursor:auto;
	background: var(--primary-fore);
	color: var(--secondary-back);
	/* 	border: 2px solid var(--primary-back); */
	transition:
		all 0.5s 0s ease; /* background 0.5s 0.125s ease-out,
	border 0.5s 0.125s ease-out 	*/
	}
	.isOpen .content {
		/* 	border: 2px solid var(--accent); */
		/* 	background: var(--primary-fore); */
	}
</style>