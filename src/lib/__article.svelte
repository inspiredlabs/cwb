<script>
//export let title, description, tags; // from markdown
/* on-the-fly classes: github.com/martypdx/rehype-add-classes */
</script>

<!-- | CWB.ORG.UK
<svelte:head>
	<title>{title}</title>
  <meta name="title" content="{title}">
	<meta name="description" content="{description}">
	<meta name="keywords" content="{`${tags.join(', ')}` }">
  <meta name="author" content="Scott Phillips">
</svelte:head>
-->

<!-- <script type="application/ld+json">
	{
		"@context": "http://schema.org",
		"@type": "Article",
		"headline": "[article title]",
		"alternativeHeadline": "[article sub heading]",
		"image": "[main article image url]",
		"author": "[author name]",
		"datePublished": "[date in ISO format e.g. 2014-03-16]",
		"description": "[article summary]"
	}
	</script> -->

<section class="cf w-100 f4 f5-l highlight"><!-- pv3  -->
	<div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l">
	<div class="fr w-100 w-100-ns w-100-m measure-custom-l f4 cf"><!-- pv4  -->
		<slot></slot>
		</div>
	</div>
</section>
<!-- !SEO -->