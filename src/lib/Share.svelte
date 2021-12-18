<script>
import Section from '$lib/Section.svelte';
import { page } from '$app/stores'; //<span class="bg-gold">https://cwb.org.uk{$page.path}</span>
</script>


<div class="w-100 pv5 tc "><!-- bg-primary-back -->
	<Section>

		{title}, {objective}, {tags}, {author},  {serp}, {date}

		<h4 class="primary-back">Share article <span class="accent">with:</span></h4><!-- ttu tracked -->
		<ul class="list pl0 tracked tracked-m tracked-l ttu mb3 b no-clutter">
			<li class="f8 f7-ns f5-m f4-l dib"><!-- ph0 pv2 ph2-ns pv2-ns  --><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcwb.org.uk{$page.path}%2F&amp;quote=Clowns%20Without%20Borders"
					target="_blank" title="Share on Facebook"
					class="pointer link color-transition bg-transition f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-facebook ttu tracked tracked-ns tracked-m tracked-mega-l hover-secondary-back hover-bg-white dib b system tc mv1">facebook</a><!--br1-->
					<!-- Static: stackoverflow.com/questions/5478702/add-facebook-share-button-to-static-html-page -->
				</li>
			<li class="f8 f7-ns f5-m f4-l dib"><a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fcwb.org.uk{$page.path}%2F&amp;text=Clowns%20Without%20Borders"
					target="_blank" title="Tweet this"
					class="pointer link color-transition bg-transition f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-twitter ttu tracked tracked-ns tracked-m tracked-mega-l hover-secondary-back hover-bg-white dib b system tc mv1">twitter</a><!--br1--></li>
			<li class="f8 f7-ns f5-m f4-l dib"><a href="mailto:?subject=Clowns%20Without%20Borders&amp;body=Clowns%20Without%20Borders:%20https%3A%2F%2Fcwb.org.uk{$page.path}"
					target="_blank" title="email this"
					class="pointer link color-transition bg-transition f8 f6-ns f6-m f6-l fl-m pv2 pv1-m ph1 ph3-ns ph3-m ph4-l mr2 ba bw1 b--secondary-back white bg-pm-blue-dark ttu tracked tracked-ns tracked-m tracked-mega-l hover-secondary-back hover-bg-white dib b system tc mv1">email</a><!--br1--></li>
		</ul>
	</Section>
</div>




