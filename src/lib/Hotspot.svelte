<script>
import Section from "$lib/Section.svelte"
import Margin from "$lib/Margin.svelte"


/* "People like us, do things like this", from: https://youtu.be/Qsnap5Oh8S8?t=71 */
let hotspots = [ // hotspots[0]
  "NGOs often &ldquo;see&nbsp;one, fund&nbsp;one&rdquo;<br>in reaction to our&nbsp;shows",
  "Aid providers &ldquo;see&nbsp;one, fund&nbsp;one&rdquo;, after seeing children at our&nbsp;shows",
  "We would have to stop self-funded activites, without individual&nbsp;donors",
  "Programmes with UNICEF, UNHCR &amp; Oxfam started with them seeing our shows in&nbsp;person",
  "We would have to reduce our scope without individual&nbsp;donors",
  "Hundreds of individuals celebrate our work through <a target='_blank' class='white ' href='https://www.justgiving.com/cwb-uk'>Just&nbsp;Giving</a>",
  "Individuals donate an average of £90&nbsp;each using <a target='_blank' class='white ' href='https://uk.virginmoneygiving.com/charity-web/charity/finalCharityHomepage.action?charityId=1009801'>Virgin Money&nbsp;Giving</a>",
  "NGOs fund our work because we use frameworks such as Kolb's&nbsp;Learning&nbsp;Cycle",
  "NGOs fund our development, they help us have the biggest&nbsp;impact",
  "NGOs fund Partnerships that meet their Humanitarian&nbsp;Objectives and share our&nbsp;values",
]; // People like us help children heal. JOIN THEM

/* Consider passing a default prop: svelte.dev/tutorial/default-values */
$: index = Math.floor(Math.random() * 10);


/*
- from: youtube.com/watch?v=rVcphsUupws
function getRandomNumber(min, max) {
  let step1 = min - max + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
*/
</script>


<div class="bg-accent pv4">

  <Margin>
    <blockquote class="f1 fw7 no-clutter flex items-start flex-column flex-row-l pa0 ma0">
      <question class="w-100 w-third-l pa0 secondary-back tl tc-m tr-l pr3-l">
        Did you&nbsp;know?
        <!-- "People like us, do things like this", from: https://youtu.be/Qsnap5Oh8S8?t=71 */ -->
      </question><!-- /Column1 -->
      <answer class="w-100 w-two-thirds-l pa0 white tl tc-m tl-l">
        {@html hotspots[index]}
        </answer>
    </blockquote><!-- /Three columns -->
    <!-- <div class="pt5 tl tc-m tc-l">
      <a href="#" class="link pointer transition input-reset pointer br0 f6 f5-ns pv3 ba bw2 b--primary-back primary-back ttu tracked-mega hover-bg-white b system tc ph4">Join them</a>
    </div> -->
    <!-- Learn More&hellip; -->
  </Margin>
</div>