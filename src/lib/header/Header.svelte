<script>
import { page } from '$app/stores';
import logo from '$lib/images/cwb.svg';
let alt = 'CWB.ORG.UK Logo';
</script>

<header class="bg-off-white fixed z-1 w-100 flex justify-between">
	<div class="corner">
		<a

		class="h3 h3"
		href="/">
			<img
			src={logo} alt={alt} />
		</a>
	</div>

</header>
<style>/*
	<nav class="bg-gold white">
		<ul class="list pl0">
			{#each routesAbout as about}
				<!-- Note the reactive string literal doesn't need escaping //javascript.info/regexp-escaping -->
				<li class="{about.header}">
					<a
						class="no-underline link o-80 glow inherit underline-hover transition"
						class:active={$page.path === `${about.href}`}
						sveltekit:prefetch href="{about.href}"
					>{about.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<nav class="bg-meadow white">
		<ul class="list pl0">
			{#each routesSupport as support}
				<li class="{support.header}">
					<a
						class="no-underline link o-80 glow inherit underline-hover transition"
						class:active={$page.path === `${support.href}`}
						sveltekit:prefetch href="{support.href}"
					>{support.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<nav class="bg-raspberry white">
		<ul class="list pl0">
			{#each routesCourses as courses}
			<li class="{courses.header}">
					<a
						class="no-underline link o-80 glow inherit underline-hover transition"
						class:active={$page.path === `${courses.href}`}
						sveltekit:prefetch href="{courses.href}"
					>{courses.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<nav class="bg-egyptian white">
		<ul class="list pl0">
			{#each routesRegulation as regulation}
				<li class="{regulation.header}">
					<a
						class="no-underline link o-80 glow inherit underline-hover transition"
						class:active={$page.path === `${regulation.href}`}
						sveltekit:prefetch href="{regulation.href}"
					>{regulation.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>


	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-size: 0.8rem;
		text-decoration: none;
	}

*/

.corner {
	width: 3em;
	height: 3em;
}

.corner a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.corner img {
	width: 2em;
	height: 2em;
	object-fit: contain;
}



svg {
	width: 2em;
	height: 3em;
	display: block;
}

path {
	fill: var(--background);
}


a.active{
	opacity: 1;
	text-decoration: underline;
}

/*li.active::before {
	--size: 6px;
	content: '';
	width: 0;
	height: 0;
	position: absolute;
	top: 0;
	left: calc(50% - var(--size));
	border: var(--size) solid transparent;
	border-top: var(--size) solid red;
}*/
</style>