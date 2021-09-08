<script>
import LDTag from '$lib/LDTag.svelte';
export let images, jobTitle, title; // `, telephone, url` from markdown

/*
const personSchema = {
  "@context": "http://schema.org/",
  "type": "Person",
  "jobTitle": jobTitle||undefined,
  "name": title||undefined,
  "telephone": telephone||undefined,
  "url": url||undefined
}
*/

/*
How to on-the-fly preprocess? https://github.com/martypdx/rehype-add-classes
*/
</script>


<!-- <svelte:head>
	<title>{title}, {jobTitle} for CWB.ORG.UK</title>
  <LDTag schema={personSchema} />
</svelte:head> -->



<!-- <div class="flex justify-center"> -->
<!-- Blog Layout -->
<article class="pb4"><!-- measure-wide pa4 -->
  <div class="tc">
  {#each images as image, index }
    {#if index === 0 }
      {#if jobTitle ? jobTitle : undefined }

      <img class="br-100 w4 h4" src={`${image}`} alt="{title} is {jobTitle} {index}" >
      {:else}
      <img class="br-100 w4 h4" src={`${image}`} alt="{title} {index}" >
      <!-- {`${image.replace(/(\w+\/)/gi, '')}`} -->

      {/if}
    {/if}
  {/each}

  <heading>
    <h2>{title}</h2>
    <h3 class="b tracked ttu fw4 o-70">{jobTitle}</h3>
  </heading>

  </div>
  <div class="f4 highlight">
    <!-- measure-wide mw6 mr-auto ml-auto  -->
    <slot></slot>
  </div>
</article>
<!-- </div> -->

<!--style global>
  .trustee a {}
  .trustee a:visited { opacity: 0.8;}

  .trustee a {
    text-decoration: none;
    font-weight: bold;
    color: #383838
  }
  .trustee a:hover {
    text-decoration:underline;
  }
  .trustee ul {
    list-style: none;
    padding-left: 0;
  }
  .trustee li {
    color: red
  }
</style-->