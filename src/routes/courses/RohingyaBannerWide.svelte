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
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l pr2">
					<strong>40,000 refugees</strong>
					live in<br>1&thinsp;sq.&nbsp;Km. heightening risk of&nbsp;disease outbreak.</p>
    </div>
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0">
			<div
				use:viewport
				on:enterViewport={() => two = true }
				on:exitViewport={() => two = false }
				class="{ two ? 'two' : '' } transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number"></div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l pr2">We trained <strong>1,603 children</strong> as leaders in handwashing awareness across camps.</p>
    </div>
    <div class="fl w-100 w-100-ns w-third-m w-third-l pa2 pa0-m pt0">
			<div
				use:viewport
				on:enterViewport={() => three = true }
				on:exitViewport={() => three = false }
				class="{ three ? 'three' : '' } transition f-5 f1-ns f1-m f-5-l fw7 tracked-tight avenir stroke-text o-0 number">&times;</div>
				<p class="mt0 f2 fw2 f2-ns f3-m f2-l">They shared key ideas with <strong>10 other people</strong> multiplying hygiene promotion for all.</p>
			</div>
  </div>
</div>
</aside>

<style>
	/* 'https://cwb.org.uk/images'; */
.hero {
	background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.3),
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0.6),
				rgba(0, 0, 0, 0.6)
			)
			0 0 / 100% no-repeat,
			url('./images/make-wash-fun-rohingya.jpg')
			center 50% / cover no-repeat;
}
	.stroke-text { color: inherit; }/*inherit*/

	@media (min-resolution: 192dpi) {
		.stroke-text {
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			-webkit-text-stroke: 1px white;
		}
	}
	.number {
		transform: scale(80%);
		transform-origin: bottom left;
		will-change: opacity, transform;

	}
	.number::before{
		content: counter(num);
	}
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
		--num-one: 40000; /* <div class="number one"></div> */
		transform: scale(100%);
		opacity:1;
		transition-delay: 0s;
		/* transform-style: preserve-3d; */
	}
	/***************************************/
	@property --num-two {
		syntax: "<integer>";
		initial-value: 603; /* INITIAL */
		inherits: false;
	}
	/* .two::after { content: ',000' } */
	.two {
		transition:
			--num-two 2s 2s ease,
			transform 2s 2s ease,
			opacity 2s 2s ease;
		counter-set: num var(--num-two);
		--num-two: 1603; /* <div class="number two"></div> */
		transform: scale(100%);
		opacity:1;

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
			--num-three 2s 4s ease,
			transform 2s 4s ease,
			opacity 2s 4s ease;
		counter-set: num var(--num-three);
		--num-three: 10; /* <div class="number three"></div> */
		transform: scale(100%);
		opacity:1;
			/* transform-style: preserve-3d; */
	}
	/***************************************/

</style>