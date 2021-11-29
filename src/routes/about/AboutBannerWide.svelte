<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
</script>

<!-- <aside class="cf w-100 pv3 f4 f5-l highlight bg-gold">
	<div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l bg-green">
		<div class="pv3 fr w-100 w-100-ns w-100-m measure-custom-l f4 cf bg-yellow"></div>
  </div>
</aside> -->

<!-- <aside class="cf w-100 pv3 f4 f5-l highlight bg-cobalt">
	<div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l bg-green">
		<div class="pv3 fr w-100 w-100-ns w-100-m measure-custom-l f4 cf bg-yellow"></div>
  </div>
</aside> -->

<!--div class="avenir vh-100 vh-75-ns vh-75-m cover bg-center b-lazy b-loaded" style="background-image: url({bg});">
	<div class="vh-100 vh-75-ns vh-75-m dt w-100">
	<div class="dtc tc white ph3 ph4-l v-btm text-shadow measure-narrow mb3">
		<h1 class="en f2 f3-ns f1-l mb0 lh-title" lang="en" style="display: block;">Organic&nbsp;treats from the&nbsp;heart of&nbsp;Italy</h1>
		<h2 class="en f3 f4-ns mt3" lang="en" style="display: block;">Marzò&nbsp;– a fresco of friends, family and chance&nbsp;encounters.</h2>
	</div>
	</div>
</div-->

<script>
	import Sting from '$lib/header/Sting.svelte';
	import viewport from '$lib/useViewportAction';
	let one, two, three;
</script>

<aside class="dt w-100 vh-100 vh-75-ns vh-75-m bg-center hero pt5">

  <div class="dtc v-mid mw8 center ph3-ns white pt0 ">

		<!-- pv3  -->
		<!-- <section class="cf w-100 f4 f5-l highlight">
			<div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l">
				<div class="fr w-100 w-100-ns w-100-m measure-custom-l f4 cf">

					<div class="w3 h3">
						<Sting />
					</div>

				</div>
			</div>
		</section> -->

  <div class="cf ph2-ns pt2-ns pt5-m pt6-l">
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0 ">
			<!-- hover-bg-charcoal bg-transition -->
			<div
				use:viewport
				on:enterViewport={() => one = true }
				on:exitViewport={() => one = false }
				class="{ one ? 'one' : '' } bg-transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>

				<p class="mt0 f2 fw2 f2-ns f3-m f2-l pr2"><strong class="fw6">Founded in 2014</strong> as a&nbsp;UK reg&shy;istered&nbsp;chairty to build capacity and bring&nbsp;releif.</p>



    </div>
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0">
			<div
				use:viewport
				on:enterViewport={() => two = true }
				on:exitViewport={() => two = false }
				class="{ two ? 'two' : '' } bg-transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l pr2">Sharing laughter and play with over <strong class="fw6">55,000 children &amp; young&nbsp;people</strong></p>
    </div>
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0">
			<div
				use:viewport
				on:enterViewport={() => three = true }
				on:exitViewport={() => three = false }
				class="{ three ? 'three' : '' } bg-transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l">&hellip;across <strong class="fw6">14 countries</strong> in some of the world's most hostile conditions.</p>
			</div>
  </div>
</div>
</aside>

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
			url('https://cwb.org.uk/images/playing-row-outside.webp')
			center 38% / cover no-repeat;
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
		content: counter(num, '2014')
	}
	.two.number::before {
		content: counter(num, '55,000')
	}
	.three.number::before {
		content: counter(num, '14')
	}
	*/

	/***************************************/
	@property --num-one {
		syntax: "<integer>";
		initial-value: 2021; /* INITIAL */
		inherits: false;
	}
	.one {
		transition:
			--num-one 1s ease,
			transform 1s ease,
			opacity 1s ease;
		counter-set: num var(--num-one);
		--num-one: 2014; /* <div class="number one"></div> */
		transform: scale(100%);
		opacity:1;
		transition-delay: 0s;
		/* transform-style: preserve-3d; */
	}
	/***************************************/
	@property --num-two {
		syntax: "<integer>";
		initial-value: 0; /* INITIAL */
		inherits: false;
	}
	/* .two::after { content: ',000' } */
	.two {
		transition:
			--num-two 2s ease,
			transform 2s ease,
			opacity 2s ease;
		counter-set: num var(--num-two);
		--num-two: 55000; /* <div class="number two"></div> */
		transform: scale(100%);
		opacity:1;
		transition-delay: 1s;
			/* transform-style: preserve-3d; */
	}
	/***************************************/
	@property --num-three {
		syntax: "<integer>";
		initial-value: 1; /* INITIAL */
		inherits: false;
	}
	.three {
		transition:
			--num-three 2s ease,
			transform 2s ease,
			opacity 2s ease;
		counter-set: num var(--num-three);
		--num-three: 14; /* <div class="number three"></div> */
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
		content: '2014'
	}
	.two.number::before {
		content:'55,000'
	}
	.three.number::before {
		content: '14'
	}
}

</style>