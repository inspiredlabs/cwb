<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
</script>

<script>
	import viewport from '$lib/useViewportAction';
	let one, two, three;
</script>

<aside class="dt w-100 vh-100 vh-75-ns vh-75-m bg-center hero">
  <div class="dtc v-mid mw8 center ph3-ns white pt0 pt2-ns pt5-m pt6-l">
  <div class="cf ph2-ns">
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0 ">
			<!-- hover-bg-charcoal transition -->
			<div
				use:viewport
				on:enterViewport={() => one = true }
				on:exitViewport={() => one = false }
				class="{ one ? 'one' : '' } transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l pr2"><strong>21&nbsp;Trained Facilitators</strong> make money go further by&nbsp;collaborating remotely.</p>
    </div>
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0">
			<div
				use:viewport
				on:enterViewport={() => two = true }
				on:exitViewport={() => two = false }
				class="{ two ? 'two' : '' } transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l pr2">Focusing<!--Concentrating--> on <strong>3&nbsp;key&nbsp;areas:</strong> Wellbeing Protection,
					Girl's&nbsp;Rights &amp;&nbsp;WASH.</p>
    </div>
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0">
			<div
				use:viewport
				on:enterViewport={() => three = true }
				on:exitViewport={() => three = false }
				class="{ three ? 'three' : '' } transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l">Delivering <strong>30&nbsp;projects</strong> more effectively than our partners alone.</p>
				<!-- Because our <b>21&nbsp;Facilitators</b> -->
			</div>
  </div>
</div>
</aside>

<!--
- We focus on only 3 areas: Wellbeing Protection, Girl's Rights & WASH.
- That way, our network can deliver 30 projects across multiple timezones.
- Our 21 Trained Facilitators deliver more effectively than our partners alone.
-->

<style>
	/* 'https://cwb.org.uk/images'; */
.hero {
	/* Animated BG: https://codepen.io/kachibito/pen/LMaGBg/*/
	background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.3),
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0.6),
				rgba(0, 0, 0, 0.6)
			)
			0 0 / 100% no-repeat,
			url('https://cwb.org.uk/images/children-crowded-watching-a-play-942x1024.jpg')
			center 92% / cover no-repeat;
}
	.stroke-text { color: inherit; }/*inherit*/
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.stroke-text {
			/*
			from: https://css-tricks.com/masking-vs-clipping-use/
				- and: https://www.webfx.com/blog/web-design/background-css-shorthand/
			background: url(https://img-fotki.yandex.ru/get/5607/5091629.6b/0_612e6_b9039c0d_M.jpg) center center/cover no-repeat;
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;*/
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			-webkit-text-stroke: 1px white;
			/*https://caniuse.com/?search=-webkit-background-clip*/
			/*
			color: white;
			mix-blend-mode: overlay;
			opacity: 1;
			*//*https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode*/
			/*
			text-shadow:
				-0.01em -0.01em 0 white,
				0.01em -0.01em 0 white,
					-0.01em 0.01em 0 white,
					0.01em 0.01em 0 white; */
					/* from: https://css-tricks.com/adding-stroke-to-web-text/*/
		}
	}
	/* FALLBACK state switching: https://css-tricks.com/dry-state-switching-with-css-variables-fallbacks-and-invalid-values/ */
	/*
	.sibling-only {
	counter-increment: delay-count;
	}
	.sibling-only::after {
		content: counter(delay-count);
		color: red!important;
	}
	*/

	.number {
		transform: scale(80%);
		transform-origin: bottom left;
		will-change: opacity, transform;
	}

	/* FALLBACK
	.one.number::before {
		content: counter(num, '21')
	}
	.two.number::before {
		content: counter(num, '3')
	}
	.three.number::before {
		content: counter(num, '30')
	}
	*/

	/***************************************/
	@property --num-one {
		syntax: "<integer>";
		initial-value: 0; /* INITIAL */
		inherits: false;
	}
	.one {
		transition:
			--num-one 1s ease,
			transform 1s ease,
			opacity 1s ease;
		counter-set: num var(--num-one);
		--num-one: 21; /* <div class="number one"></div> */
		transform: scale(100%);
		opacity:1;
		transition-delay: 0s;
		/* transform-style: preserve-3d; */
	}
	/***************************************/
	@property --num-two {
		syntax: "<integer>";
		initial-value: 999; /* INITIAL */
		inherits: false;
	}
	/* .two::after { content: ',000' } */
	.two {
		transition:
			--num-two 2s ease,
			transform 2s ease,
			opacity 2s ease;
		counter-set: num var(--num-two);
		--num-two: 3; /* <div class="number two"></div> */
		transform: scale(100%);
		opacity:1;
		transition-delay: 1s;
			/* transform-style: preserve-3d; */
	}
	/***************************************/
	@property --num-three {
		syntax: "<integer>";
		initial-value: 0; /* INITIAL */
		inherits: false;
	}
	.three {
		transition:
			--num-three 2s ease,
			transform 2s ease,
			opacity 2s ease;
		counter-set: num var(--num-three);
		--num-three: 30; /* <div class="number three"></div> */
		transform: scale(100%);
		opacity:1;
		transition-delay: 3s;
			/* transform-style: preserve-3d; */
	}
	/***************************************/

/* from: https://css-tricks.com/animating-number-counters/#the-new-school-css-solution*/

/** Chrominum */
@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
	.number::before {
		content: counter(num);
	}
}

/** Safari */
@media not all and (min-resolution: 0.001dpcm) {
	.one.number::before {
		content: '21'
	}
	.two.number::before {
		content:'3'
	}
	.three.number::before {
		content: '30'
	}
}

</style>