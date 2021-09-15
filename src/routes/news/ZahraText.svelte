<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const prerender = true;
</script>

<script>
	/* https://www.youtube.com/watch?v=1SKKzdHVvcI */
	import viewport from '$lib/useViewportAction';

	import { bounceOut } from 'svelte/easing';
	import { blur, scale } from 'svelte/transition';//fly, slide, fade,

	let visibleZero = false;

	let visibleZahraMsg1 = false;
	let visibleAnnaMsg1 = false;
	let visibleAnnaMsg2 = false;
	let visibleAnnaMsg3 = false;
	let visibleAnnaMsg4 = false;
	let visibleAnnaMsg5 = false;
	let visibleZahraMsg2 = false;

	/*
	.selector {
    animation: animation-one 2s infinite, animation-two 1s;
	}
	*/

	let zahraMsg1 = 'Please can you help with the lesson plan?';
	let annaMsg1 = 'Ok, thank you Zahra!<br> 😚🤜🏽💥🤛😋 We will send you something later today!';
	let annaMsg2 = '<strong>Rain On The Mountain – Body Parts</strong><br>🔴 Play Rain On The Mountain<br>🔴 Try saying it in different ways e.g. fast,slow<br>🔴 Ask them to touch different colours e.g. touch something pink, touch something orange<br>🔴 Change instructions depending on what you want to teach<br>';
	let annaMsg3 = '🔴 For example, if you want to practice numbers ask them to jump ten times or touch three green things<br>🔴 If you want to practice body parts, you can ask them to touch their nose or touch their ears for example<br>🔴 That way you will see who knows the names of their body parts!';
	let annaMsg4 = '🔴 We like to celebrate mistakes! So when somebody touches the wrong body part, have a funny way to celebrate them!<br>🔴 See the following video/s';
	let zahraMsg2 = 'Hello<br>We did this activity today<br>And the kids loved it<br>And they want us to do it again. We did not have colored items, but they touched their own clothes<br>It was amazing 😍 😍<br>Thank you';
</script>

<div style="height: 200px; background: red;" />
<div style="height: 200px; background: blue;" />
<div style="height: 200px; background: green;" />
<div style="height: 200px; background: red;" />
<div style="height: 200px; background: blue;" />


<aside>
<section class="container">

<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleZero = true }}
	on:exitViewport={() => { visibleZero = false }}
></div><!-- 	/visibleZero -->
<div style="height: 230px; ">
{#if visibleZero}
	<div
		class="bubble right"
		style="transform-origin: bottom right;"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <img style="height: 230px!important;"
				 src="https://images.unsplash.com/photo-1621508654686-809f23efdabc?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMTcwMjcyOQ&ixlib=rb-1.2.1&q=85&w=800" alt="Picture of a beach" />
	</div>
{/if}
</div><!-- /pink -->

<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleZahraMsg1 = true }}
	on:exitViewport={() => { visibleZahraMsg1 = false }}
></div><!-- /visibleZahraMsg1 -->
	<div style="height: 80px; background: pink;">
		{#if visibleZahraMsg1 }
		<div
			class="bubble right"
			style="transform-origin: bottom right;"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
		>
		<p>{@html zahraMsg1}</p>
		</div>
	{/if}
</div>

<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleAnnaMsg1 = true }}
	on:exitViewport={() => { visibleAnnaMsg1 = false }}
></div><!-- /visibleAnnaMsg1 -->
<div
style="height: 110px; background: green;"
>
	{#if visibleAnnaMsg1}
	<div
	class="bubble left"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <p>{@html annaMsg1}</p>
  </div>
{/if}
</div>


<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleAnnaMsg2 = true }}
	on:exitViewport={() => { visibleAnnaMsg2 = false }}
></div><!-- /visibleAnnaMsg2 -->
<div
style="height: 320px; background: green;"
>
	{#if visibleAnnaMsg2}
	<div
	class="bubble left"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <p>{@html annaMsg2}</p>
  </div>
{/if}
</div>

<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleAnnaMsg3 = true }}
	on:exitViewport={() => { visibleAnnaMsg3 = false }}
></div><!-- /visibleAnnaMsg3 -->
<div
style="height: 290px; background: green;"
>
	{#if visibleAnnaMsg3}
	<div
	class="bubble left"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <p>{@html annaMsg3}</p>
  </div>
{/if}
</div>

<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleAnnaMsg4 = true }}
	on:exitViewport={() => { visibleAnnaMsg4 = false }}
></div><!-- /visibleAnnaMsg4 -->
<div
style="height: 180px; background: green;"
>
	{#if visibleAnnaMsg4}
	<div
	class="bubble left"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <p>{@html annaMsg4}</p>
  </div>
{/if}
</div>



<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleAnnaMsg3 = true }}
	on:exitViewport={() => { visibleAnnaMsg3 = false }}
></div><!-- /visibleAnnaMsg3 -->
<div
style="height: 250px; background: green;"
>
	{#if visibleAnnaMsg3}
	<div
	class="bubble left"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <img style="min-height: 230px!important;max-height: 230px!important;"
				 src="https://images.unsplash.com/photo-1621338878752-1d2e42f0d0e4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMTcwMzY3MA&ixlib=rb-1.2.1&q=85&w=800" alt="Moutain covered with snow" />
  </div>
{/if}
</div>


<div
	style="height: 1px; background: pink;"
	use:viewport
	on:enterViewport={() => { visibleZahraMsg2 = true }}
	on:exitViewport={() => { visibleZahraMsg2 = false }}
></div><!-- /visibleZahraMsg2 -->
<div
style="height: 240px; background: green;"
>
	{#if visibleZahraMsg2}
	<div
	class="bubble right"
		in:scale="{{ y: 111, duration: 480, easing: bounceOut, delay: 1111 }}"
		out:blur="{{ duration: 1333, delay: 1111 }}"
	>
    <p>{@html zahraMsg2}</p>
  </div>
{/if}
</div>

</section>
</aside>
<div style="height: 200px; background: red;" />
<div style="height: 200px; background: blue;" />
<div style="height: 200px; background: green;" />
<div style="height: 200px; background: red;" />
<div style="height: 200px; background: blue;" />
<div style="height: 200px; background: green;" />


<style>
	/* https://codepen.io/Mamboleoo/pen/KKWWQwj */
	.bubble {
  -webkit-mask-image: radial-gradient(#fff 24.5px, #fff0 25px), radial-gradient(#fff 24.5px, #fff0 25px), radial-gradient(#fff 24.5px, #fff0 25px), radial-gradient(#fff 24.5px, #fff0 25px), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), url('data:image/svg+xml;utf8,<svg width="39" height="25" viewBox="0 0 39 25" xmlns="http://www.w3.org/2000/svg"><path d="M38.4998 24.5C27.6998 22.1 22.9998 7.5 21.9998 0.5C11.8331 1.83333 -6.30022 6.3 2.49978 13.5C13.4998 22.5 21.9998 24.5 38.4998 24.5Z" /></svg>');
          mask-image: radial-gradient(#fff 24.5px, #fff0 25px), radial-gradient(#fff 24.5px, #fff0 25px), radial-gradient(#fff 24.5px, #fff0 25px), radial-gradient(#fff 24.5px, #fff0 25px), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), url('data:image/svg+xml;utf8,<svg width="39" height="25" viewBox="0 0 39 25" xmlns="http://www.w3.org/2000/svg"><path d="M38.4998 24.5C27.6998 22.1 22.9998 7.5 21.9998 0.5C11.8331 1.83333 -6.30022 6.3 2.49978 13.5C13.4998 22.5 21.9998 24.5 38.4998 24.5Z" /></svg>');
  -webkit-mask-position: 0 0, 100% 0, 0 100%, 100% 100%, 0 25px, 25px 0, 100% 100%;
          mask-position: 0 0, 100% 0, 0 100%, 100% 100%, 0 25px, 25px 0, 100% 100%;
  -webkit-mask-size: 50px 50px, 50px 50px, 50px 50px, 50px 50px, 100% calc(100% - 50px), calc(100% - 50px) 100%, 19.5px 12.5px;
          mask-size: 50px 50px, 50px 50px, 50px 50px, 50px 50px, 100% calc(100% - 50px), calc(100% - 50px) 100%, 19.5px 12.5px;
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  margin-bottom: 15px;
  max-width: 60%;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-size: 0;
}
@media (max-width: 600px) {
  .bubble {
    max-width: 80%;
  }
}

/* TRANSFORM ORIGIN: https://css-tricks.com/almanac/properties/t/transform-origin/ */
.bubble.right {
  margin-left: auto;
	transform-origin: bottom right;
  background: #549EF5;
  color: white;
}
.bubble.left {
	transform-origin: bottom left;
  background: #E9E9EB;
  -webkit-mask-image: radial-gradient(#fff, #fff 24.5px, transparent 25px), radial-gradient(#fff, #fff 24.5px, transparent 25px), radial-gradient(#fff, #fff 24.5px, transparent 25px), radial-gradient(#fff, #fff 24.5px, transparent 25px), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), url('data:image/svg+xml;utf8,<svg width="39" height="24" viewBox="0 0 39 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.000217438 24C10.8002 21.6 15.5002 7 16.5002 0C26.6669 1.33333 44.8002 5.8 36.0002 13C25.0002 22 16.5002 24 0.000217438 24Z" /></svg>');
          mask-image: radial-gradient(#fff, #fff 24.5px, transparent 25px), radial-gradient(#fff, #fff 24.5px, transparent 25px), radial-gradient(#fff, #fff 24.5px, transparent 25px), radial-gradient(#fff, #fff 24.5px, transparent 25px), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), url('data:image/svg+xml;utf8,<svg width="39" height="24" viewBox="0 0 39 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.000217438 24C10.8002 21.6 15.5002 7 16.5002 0C26.6669 1.33333 44.8002 5.8 36.0002 13C25.0002 22 16.5002 24 0.000217438 24Z" /></svg>');
  -webkit-mask-position: 0 0, 100% 0, 0 100%, 100% 100%, 0 25px, 25px 0, 0 100%;
          mask-position: 0 0, 100% 0, 0 100%, 100% 100%, 0 25px, 25px 0, 0 100%;
}
.bubble img {
  max-width: 100%;
}
.bubble p {
  position: relative;
  font-size: 18px;
  line-height: 1.2;
  font-family: sans-serif;
  padding: 15px 15px;
  margin: 0;
  letter-spacing: 0.02em;
}
@media (max-width: 600px) {
  .bubble p {
    font-size: 16px;
  }
}

aside {
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

}

.container {
  background: white;
  padding: 50px 25px;
  width: 100%;
  max-width: 500px;
}

img {
  max-width: 100%;
}
</style>