<script>
	import { page } from '$app/stores';
	//import logo from './svelte-logo.svg';
	import logo from '$lib/images/cwb.svg';
	let alt = 'CWB.org.uk';

	// Manually add: medium.com/codex/getting-started-with-sveltekit-369987d924bd
	const routes = [
		{ href: '/', title: 'Home' },
		{ href: '/about', title: 'About' },
		{ href: '/todos', title: 'todos' },
		//{ href: '/about-us', title: 'About Us' },
		//{ href: '/courses', title: 'Courses' },
		//{ href: '/our-approach', title: 'Our Approach' },
		//{ href: '/support-us', title: 'Support Us' }
	];
</script>

<header class="bg-silver fixed z-1 w-100 flex justify-between">
	<div class="corner">
		<a

		class="h3 h3"
		href="/">
			<img
			src={logo} alt={alt} />
		</a>
	</div>

	<nav class="bg-gold ">
		<ul>
			{#each routes as route}
				<!-- Note the reactive string literal doesn't need escaping //javascript.info/regexp-escaping-->
				<li class:active={$page.path === `${route.href}`}>
					<a
						class="link glow o-80"
						sveltekit:prefetch href="{route.href}"
					>{route.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>

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

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		/* transition: color 0.2s linear; */
	}
	a {
		transition: opacity 0.2s linear;
	}
</style>
