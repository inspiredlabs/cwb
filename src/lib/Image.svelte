<script>
  export let imageJPG;
  // export let imageWEBP;
  export let alt;
  export let caption = "";

</script>

<figure class="pa0 ma0">
  <picture>
    <!-- <source
      srcset="{imageWEBP}"
      type="image/webp"
      loading="lazy"
    > -->
    <img
      class="br3 w4"
      src="{imageJPG}"
      {alt}
      loading="lazy"
    >
  </picture>
  {#if caption !== ""}
    <figcaption
      class="highlight pa3"
    >{@html caption}</figcaption>
  {/if}
</figure>