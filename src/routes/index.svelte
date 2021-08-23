<script context="module">
	export const prerender = true;

	/* "Importing all `*.md` posts as modules is possible in vite, fetching them as a glob", -from: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=98
	learn more: ://vitejs.dev/guide/features.html#glob-import
	*/
	const allPosts = import.meta.glob("./**/*.md"); // Make it recursive: `./**/`

	let body = [];
	for(let path in allPosts) {
		//console.log(path)//meta only
		//console.log(allPosts[path])//as a function. This needs `()` to be invoked.
		body.push(allPosts[path]().then( ({metadata}) => {
			//console.log(metadata)
			return {path, metadata} // Valid metadata only: yamlvalidator.com/
		}))
	}


	// This is a promise: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=456
	export const load = async() => {
		const posts = await Promise.all(body)

		//console.log(posts)
		return {
			props: {
				posts //send the `props` to the component
			}
		}
	}
</script>
<script>
import LDTag from '$lib/LDTag.svelte';
import { websiteSchema, orgSchema } from '$lib/json-ld';

import Image from "$lib/Image.svelte"
export let posts

/*
let microdata = {
		type: "NGO",
		name: "Clowns Without Borders, UK",
		url: "https://cwb.org.uk/",
		logo: "https://cwb.org.uk/images/cwb.svg",
		image: "https://cwb.org.uk/images/sam-smiling.jpg",
		description: "index.svelte page description only",
		telephone: 442072446908,
		streetAddress: "118 Sternhold Avenue",
		addressLocality: "London",
		postalCode: "SW2 4PP",
		addressCountry: "United Kingdom"
	};
*/

</script>


<svelte:head>
	<title>CWB.ORG.UK |
		Training and Fundraising to improve the emotional wellbeing of children and young people living through conflict and disaster.
	</title>
	<!--  style="overscroll-behavior-y: none;/*contain*/" fixed -->
	<!--style>
		html {
			background: linear-gradient(0deg, rgba(159,0,255,1) 0%, rgba(255,215,0,1) 10%, rgba(255,215,0,1) 90%, rgba(159,0,255,1) 100%);
		}
	</style-->
	<LDTag schema={websiteSchema} />
	<LDTag schema={orgSchema} />
</svelte:head>
