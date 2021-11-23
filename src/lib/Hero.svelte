<script>
import HomeLink from '$lib/header/HomeLink.svelte';
</script>

<!--
ASPECT RATIO: tippingpoint.dev/css-aspect-ratio
.aspect-ratio--16-9 {
  overflow: hidden;
  padding-top: 56.25%;
  background: url('city-skyline.jpg') no-repeat center;
  background-size: cover;
}
-->

<header class="pt5 bg-primary-back white-90 antialias">

  <section class="cf w-100 pv3 f4 f5-l highlight">
  <div class="fl w-80 w-80-ns w-80-m w-two-thirds-l pl2 pl1-ns pl4-m pr4-m pl2-l">
    <div
      class="fr w-100 w-100-ns w-100-m measure-custom-l f4 cf bg-primary-fore vh-50 ph3 br4"><!-- `bg-cobalt-egyptian-gradient`, `bg-light-gray` too dirty for banner -->

    <h1
    style="padding-top:23vh;font-size:2.5vw">
      <HomeLink/>
    </h1>

      </div><!-- /fr measure-custom-l -->
    </div><!-- /x-->
  </section>
</header>

<!--div>
<section class="w-100 flex flex-row-ns flex-column bg-purple white" >
  Next level colour-schemes: https://codepen.io/inspiredlabs/pen/yLMppJL <br><br>

  bg-purple <br><br>
  - hover, background-color: rgba(0, 0, 0, 0.08); <br><br>
  - active, background-color: rgba(0, 0, 0, 0.333); <br><br>
  <br>
  Menu: gray: #333 & outline: 2px #C0C0C0 solid; <br><br>
  Body: bg: `light-gray` color: charcoal <br><br>
  article: `near-white` <br><br>
</section>
<section class="w-100 flex flex-row-ns flex-column bg-plum white" >
  bg-plum
</section>
<section class="w-100 flex flex-row-ns flex-column bg-mandarino white" >
  bg-mandarino
</section>
<section class="w-100 flex flex-row-ns flex-column bg-mustard white" >
  bg-mustard
</section>

<section class="w-100 flex flex-row-ns flex-column bg-meadow white" >
  bg-meadow
</section>
<section class="w-100 flex flex-row-ns flex-column bg-spa white" >
  bg-spa hover: #005333
</section>

<section class="w-100 flex flex-row-ns flex-column bg-primary-back white" >
  bg-primary-back
</section>
<section class="w-100 flex flex-row-ns flex-column bg-oxford white" >
  bg-oxford
</section>
</div-->
<!--div class="black">
  <section class="w-100 flex flex-row-ns flex-column bg-dark-gray " >
    bg-dark-gray
  </section>
  <section class="w-100 flex flex-row-ns flex-column bg-mid-gray " >
    bg-mid-gray
  </section>
  <section class="w-100 flex flex-row-ns flex-column bg-gray " >
    bg-gray
  </section>
  <section class="w-100 flex flex-row-ns flex-column bg-silver " >
    bg-silver
  </section>
  <section class="w-100 flex flex-row-ns flex-column bg-light-silver " >
    bg-light-silver
  </section>

  <section class="w-100 flex flex-row-ns flex-column bg-moon-gray " >
    bg-moon-gray
  </section>

  <section class="w-100 flex flex-row-ns flex-column bg-light-gray " >
    bg-light-gray
  </section>

  <section class="w-100 flex flex-row-ns flex-column bg-primary-fore " >
    bg-primary-fore
  </section>

  <section class="w-100 flex flex-row-ns flex-column bg-white " >
    bg-white
  </section>

</div-->
<!--style>
  .bg-cobalt-egyptian-gradient {
    background: hsla(231, 60%, 38%, 1);

    background: linear-gradient(108deg, hsla(231, 60%, 38%, 1) 0%, hsla(201, 75%, 36%, 1) 100%);

    background: -moz-linear-gradient(108deg, hsla(231, 60%, 38%, 1) 0%, hsla(201, 75%, 36%, 1) 100%);

    background: -webkit-linear-gradient(108deg, hsla(231, 60%, 38%, 1) 0%, hsla(201, 75%, 36%, 1) 100%);

  }
  </style-->