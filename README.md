
<!-- animation: Courage, Care, logo
# <img width="48" height="48" style="vertical-align: middle" src="https://inspiredlabs.co.uk/cwb/cwb.svg" alt="Clowns Without Borders" /> Without Borders
-->

# <!-- animation: Courage, Care, logo --><img width="32" height="32" src="./cwb.svg" alt="Clowns Without Borders" /> Without Borders

[![Netlify Status](https://api.netlify.com/api/v1/badges/4247084e-b3a3-4819-aa2c-30cd835598e9/deploy-status)](https://app.netlify.com/sites/happy-shaw-91e31c/deploys)

# Scope of Work

This doc is a response to _"Improving digital presence"_, and aims to bring clarity to _"agreed outcomes"_, through clear deliverables.

The project has a _"fundraising-focus"_. Contained within an actionable: _"website platform/infrastructure [...] fit for purpose"_, to orient the organisation towards `sustainment`, and long-term fundraising.

## Deliverables

Strike a balance that can `satisfice` <!--(satisfy &amp; suffice to an acceptable threshold)--> content, news, strategy &amp; UX:
- IA to influence consistent terminology for writing _"emotive case studies"_.
- Define a niche `target audience`, and their appropriate channels of contact.
- `memes` to communicate effectively about how people experience our work.
- Help `visitors` take action appropriately via the website.

## Challenges

Although there are numerous challenges presented in this document, probably the most complex is handling the perception of clowns being counter to NGO's `Charitable Objectives`.

### `key-insight` to provide orientation

CWB is a serious charity _"changing the landscape of how we treat children"_. By correctly understanding our `key-insight` for our `target audience`, we will implement perception change and lay the foundation of `sustainment`.

### Members lack mutual priorities

Some `visitors` experience conflict of interest that hinder our fundraising priorities. Consider how to _design out_ hurdles that meet mutual needs for them to take action.

This might be an opportunity to include them in an exciting content rewrite:

> What do you want to say to our CWB visitors?

### Content alone, isn't enough

Currently our `memes` aren't accessible, although people do know of our impact. But, how does `CWB` [inspire action](https://www.youtube.com/results?search_query=Golden+Circle+simon+sinek)<!--Simon Sinek--> and answer the _why?_

### Accountability adds overhead

Effective accountability is a challenge. Our `target audience` may not realise the extent our experts helping pro-bono are implementing:

```
- M&E [Monitoring & Evaluation]() Expert:
  - specialist "[Theory of Change]()"
- Our training is informed by:
  - [Kolb's Learning Cycle]()
  - and the [Kirkpatrick Model]()
  - and we assess learning throughout.
- Our focus on participants leading activities supports behaviour change e.g.
  - participants are required to implement activities between sessions.
- We work with our partners to implement monitoring.
- This is the monitoring we ask people in our training to work with: SEE GRAPHIC
```

### GDPR compliance

The privacy policy, written in 2018 (with enquiries going to `info@toldbyanidiot.org`), doesn't have a GDPR compliant analytics provider. This is a reasonable time to consider switching to [Motomo](), at the risk of the task snowballing.

### SEO opportunity

SEO is hard. Robot coverage for `nonprofitStatus` hasn't been adopted.
Longterm [announcements](https://github.com/schemaorg/suggestions-questions-brainstorming/issues/19#issuecomment-641244465) aside, there may not be a better opportunity to represent the organisation for perceptablity.

#### Perceptablity through structure

Defining metadata with consistency and plurality should benefit us from perceptablity:
- Review `__person.svelte` from: http://cwb.org.uk/about/unni
- Review `site.json` and `organization.json` validate and check the [SERP count](https://www.charactercountonline.com/).
- What will `satisfice` going beyond just representing the [Blog](https://schema.org/Blog) in `LD`?
- Plurality through `Person`, `Website`, `Organization`, `blogPost` as part of a `Blog`. For example:
```
{
  "@context": "http://schema.org/",
  "type": "Person",
  "jobTitle": "CEO",
  "name": "Samantha Holdsworth",
  "telephone": "442072446908",
  /* "telephone": "447939522517", facebook */

  "url": "https://cwb.org.uk"
}
```
- `FAIR` (Findable, accessible, Interoperable, Reusable) [best practices](https://maastrichtu-ids.github.io/best-practices/docs/fair-data).
- Consider our `cross platform` structure of taglines:
  - `site.json` as described on this: [Website](https://cwb.org.uk/): `Training and Fundraising to improve the emotional wellbeing of children and young people living through conflict and disaster.`
  - `organization.json` described with a PostalAddress as: [Organization](https://cwb.org.uk/): `Facilitator Training and Programme Development to improve the emotional wellbeing of children and young people living through conflict and disaster.`
  - [twitter](https://twitter.com/childrenlaughUK): Image caption: `#ChildRefugees` && ```Clowns Without Borders is a humanitarian arts led #charity dedicated to bringing emotional relief to #children living in #crisis across the globe.```
  - channel/UCWDuY-wPQO3PL8HWTSPs86Q = [Youtube](https://www.youtube.com/channel/UCWDuY-wPQO3PL8HWTSPs86Q/about): `Sharing laughter with children in Humanitarian Disaster`
  - [Instagram](https://www.instagram.com/clownswithoutbordersuk/): ```Providing emotional relief to children and their communities in crisis through the power of laughter and play. ```
  - [facebook](https://www.facebook.com/clownswithoutborders): Image caption: `Joy Makes A Difference` && `multiple cross-posts`.
  - Social Proof page on [Just Giving](https://justgiving.com/cwb-uk): `We use joy, play and laughter to support & empower children in Disasters` && `Our mission is to alleviate the suffering of children in humanitarian disasters by sharing laughter and play when they need it the most. Working with professional artists we specifically create time for children to reconnect with the very things that make them human like laughter, hope and wonder.`
  - GOV.UK: [Charity number: 1156987](https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5043150/charity-overview):

```
Clowns Without Borders uses laughter and play as a stabilising force
for children living in disaster zones. Working with professional artists
and facilitators, we share performances and workshops to encourage
children to connect with childish impulses and a sense of fun.

It is our mission to alleviate suffering by sharing joy
and wonder when they need it most.
We work in Bangladesh, Greece, Jordan.
```


## Information Architecture

IA is as a tool to produce consistency throughout design systems. We use it to structure our information, and create ideas that move people towards the kind of action we want them to take.

### Top level navigation (repetition):

```
- our courses:
  - training for facilitators
  - programme delivery
  - monitoring &amp; evaluation
- about us:
  - regulator recognition
  - social impact recognition
    - uk gov. points of light
    - testimonials
    - awards
  - who we are:
    - core team
    - facilitators
      - programme leaders
      - facilitator trainers
    - our network:
      - trustees
      - partners
    - visitors
- our approach || impact:
  - case studies
- support us:
  - donate directly (stripe)
  - fundraising
  - sign-up (subscribe/telephone)
  - work with us:
    - funding
    - volunteer
    - vacancies
    - as a facilitator (safeguarding)
  - social/share
    - CTA: `add your voice`
```

### Content

#### Logo animation

- Courage Without Borders
- Courses Without Borders
- Care Without Borders
- sporadically, simply: `Clowns Without Borders`

#### Work with us

To reach `sustainment` our existing NGO partners need to take action and commit further `innovation funding`. There is also a need to develop relationships with other NGO Partners to help them appreciate the benefits of commiting resources with us.

Our `CTA` centre on existing NGO partners (see: [Work with us](#work-with-us)).

### User Experience

Defining how people take action has practical overlap with the UX of the site. It may be useful to use side-by-side comparison with [UNICEF](https://www.unicef.org.uk/), note the blocky layout, yellow `CTA`, use of a reductionist IA.

Thought has been applied to what is not required, helping people find what they need.

## to capture our `Target Audience`

### Writing `__articles.svelte` content

300 words of [good readibility](https://hemingwayapp.com/) using less than 15 unique keywords, each with ~2% saturation: [yoast for jamstack sites](https://jamseotools.com/?ref=producthunt),
Keyword verification (don't invent, check what people actually search for): [here](https://www.wordtracker.com/).

#### Tools

- article report: https://jamseotools.com/?ref=producthunt
- `<15` unique keywords: https://www.wordtracker.com/
- improve readability: https://hemingwayapp.com/
- Check SERP: https://www.highervisibility.com/seo/tools/serp-snippet-optimizer/

<!--
Default `index.html` BACKUP:
- Title: `Play: humanitarian aid for children in disaster | Clowns Without...` || `Learning Support: humanitarian aid for children in disaster | CWB`
- Description: `Play offers children and young people the best protection from disaster. Discover how play can deliver better NGO results on programmes you already run.`
- Keywords:
```
humanitarian aid, help refugees, refugee charity, capacity funding, corporate charity partnership, toxic stress, toxic childhood stress, human rights act, human rights, girl's rights, building capacity, capacity development training, WASH
```
-->


<!--

TIPS:
- edit Wikipedia: https://en.wikipedia.org/wiki/Payasos_Sin_Fronteras
- !Bang: https://duckduckgo.com/newbang
- `submit a website to yahoo` XML sitemap: https://smallbusiness.yahoo.com/advisor/resource-center/how-to-submit-a-new-website-to-search-engines/
	- from: xxxx



TIPS:
Primary Keyword - Secondary Keyword | Brand Name
<link rel="author" href="https://plus.google.com/u/0/109859280204979591787/posts"/>
<link rel="designer" href="https://plus.google.com/u/0/109859280204979591787/posts"/>
<link rel="web_author" href="https://plus.google.com/u/0/109859280204979591787/posts"/>
	- from: https://gist.github.com/denzildoyle/31fe294065f606b4f612

> Schema.org is compatible w. Microdata, RDFa & LD. Google in particular still favours Microdata & RDFa, from: builtvisible.com/micro-data-schema-org-guide-generating-rich-snippets/
```<div itemscope itemtype="http://data-vocabulary.org/Person">
  Name: <span itemprop="name">Daniel Butler</span>
  Website: <a href="https://builtvisible.com" itemprop="url">builtvisible.com</a>
  Title: <span itemprop="title">Head of SEO</span>
</div>
```
video:
```
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "VideoObject",
  "name" : "[name of video]",
  "duration" : "[duration in ISO format e.g. T1M33S]",
  "thumbnail" : "[thumbnail url]",
  "description" : "[description of video]"
}
</script>
```
-->

## Target Audience

```
Our biggest income, over three years is NGO's funding:
- Performances to support psychosocial first aid
- Capacity building workshops for staff
- and train-the-trainer programmes
```

- by using this information we can list who, in the humanitarian setting this website is for. eg:
  - NGO "A":
    - Performances to support psychosocial first aid
    - Capacity building workshops for staff
    - and train-the-trainer programmes
  - NGO "B":
    - Capacity building workshops for staff
  - NGO "C":
      - and train-the-trainer programmes
- then answer:
  - `aid pots see our shows...`, so who and what exactly would help `YOUR IDEAL PERSON` do more on our behalf?
  - What exactly would help `Tanya` do more on our behalf?
  - What exactly would help `Head of UNICEF` do more on our behalf?
- leverage assistance from:
  - What exactly would help `Unni` do more on our behalf?
  - What exactly would help `Shilpa` do more on our behalf?

### Where is our `target audience`?

- What `functions` do people attend and:
  - how do we maximise fundraising opportunities offline?
  - how have they changed w. Health emergancy?
- `section` _"good fit"_ include:
  - `protection`
  - `WASH`, through our innovation partners: Oxfam/Unicef
  - `PFA`, is just as important as first aid in a conflict.


### Target Audience's CTA

#### Work with us

- preparation and making contact
- `aid pots see our shows...` so we invite them online to **experience our approach to**:
  - `Performances to support psychosocial first aid`
  - `Capacity Building workshops for staff`
  - `Train-the-Trainer Programmes`
  - then: what funding action do we want them to take, ideally?
    - work with us (see: [Content](#content)).

#### Donate Directly & Fundraising

<!-- ##### Contact -->

<!-- ##### Social & Sharing -->

## Memes to define `key insight`

We help evangelists reach our `target audience` and influence decision makers:
- Can we distill noteworthy examples of `aid pots see our shows...`?
  - `capacity building`
  - `train-the-trainer`
  - `performances`

### Create `data story` from `memes` with evidence

- We speak directly and understand NGO pain-points:

> We improve programme outcomes that you are already running. We do this by training how to deliver your material using play. `DISCOVER HOW EFFECTIVE OUR TRAINING CAN BE`

- We speak to the hopes of facilitators:

> We achieve unparalleled transmission of ideas help your message reach  participants not even present! `AN EXAMPLE OF REACH`

- We speak to doubt using verifyable resources:

> Outcomes are tracked using our _Monitoring and Evaluation_ toolkit that demonstrates how much we amplify your message. `SEE THE DATA`

- We appreciate their search for value and offer our help:

> We make aid money work as hard as it can. When children participate directly they take ownership of ideas, remember what they have learned and start applying the lessons immediately. `SEE HOW RESILIENT COMMUNITIES BECOME THROUGH OUR INVOLVEMENT`

- Stimulate interest posing questions:

> Could your NGO benefit from a broader reach? We use applied psychology, that's tracked using professional monitoring and evaluation tools to deliver visibly better learning outcomes.

### Develop `key-insight` supporting `memes`

```
CWB is changing the landscape of how we treat children.

Once someone understands play is actually more effective
in supporting learning, they carry this practice forward forever...

See the paradigm shift we are creating with
UNICEF, OXFAM Case Studies
```
- Develop:
  - A _"win-win scenario"_ implies "it's good for us, and good for you", but MAKE WASH FUN acts more of a catalyst:
```
We help children learn through play,
where there's a ripple effect.
After training 100's of adult facilitators
to reach 10,000's children, those children
reach even more children!
```
  - CTA: `join us`
    - compound
    - cumalative
    - feedforward
    - p2p learning
    - ripple effect
    - snowball effect
    - takes on a life of it's own
    - spreading WASH far and wide!
    - it acts as a force multiplier
    - explode, mushroom, bloom, flourish

### Delivery `memes`:

- Develop: `...unlikely they have access to the depth and range of our approach`
- Develop: `...how our approach will reinvigorate their practice`
- Develop:

```
We make aid money work as hard as it can.

The psychosocial first aid context is an opportunity to impart valuable life skills.
As children and young people participate directly, they take ownership of these ideas and repeat their experiences again and again.

We conduct attention using play.

Our approach achieves unparalleled transmission of ideas, reaching new participants not present.
Any existing programmes can be tailored to use our tools with minimal training.

```

Key insights:

- Stories reveal our `key-insight`.
- Formalise `the correct application of play`:
  - Where's M&E's `data story` to prove our claims for this method?
  - Does each one require `human interest` development for `case shorts`?

## The business problem we are solving

> We create relevant, inspiring activities that teach more effectively

Telling is ineffective compared to doing! Our depth and range of activities help staff, volunteers and community outreach workers teach more effectively.

Once they learn our approach to learning through doing, they can do this inclusive, engaging and age appropriate activities by themselves.

## Our approach

Simply put our approach is `the correct application of play`.

A more complete definition should include:
- we understand age appropriate, applied psychology
- learning through immersive experience: play.

The serious side of `play`, what does it mean for NGO?

The serious side of `play`:
- Play is how children naturally learn and it's fundamental to every childs development.
- Play instructs by doing. How the world works becomes intrinsically clear through repetitious, immersive experiences.
- Leverage play to inform what we want to make go viral.

Aim to include:
Children and young people
speak with one voice and inspire confidence
- Positive: while acknowledging difficulties and challenges, should be
positive and forward-looking.
- Engaging
- Direct
- Authoritative

CWB can sign-off statement should be:
> We are confident you won't find a better way to `10x your NGO spending`.


## Key Insight

We leverage play:
- `the correct application of play`

## Fundraising Focus

Aim to build a platform where `funding & delivery` scale together.
- with unlimited funds, what's _our_ capacity to scale?
- What is our data gathering capacity?
<!--
- M&E toolkit could be the next (scaling) priority.
-->

### How to _design out_ any fundraising conflict of interest?

The workload responsibility for delivering `sustainment` may have to be shared with `our network`, what can we do to:
- create a more _"outward facing board"_?
- improve interactions with "fundraisers on the board, this is because it represents a conflict of interest. We have discussed this and their priority is to the charity that employs them, then us."
- `visitor` actions to help:
  - `David is a fundraising leader`
  - `Ed has been a trusts and institutions fundraiser`.


  ## Misc/unsorted

  - `CTA`: How can you help? Share your favourite story on social media, donate or if you're an NGO work with us.
  - From the `aid pots see our shows...` stories, perhaps we can demo:
    - `Clown in Your Pocket`
    - etc...
  - Case Studies should be powerfully to the point, like `case shorts`:
      - `memes` backed up with a `data story` and a `human interest` component.
    - Case Studies from Partners (for input/back-links):
      - 'performances'
      - 'capacity building' for Staff/volunteers/community outreach workers
      - 'train-the-trainer'
  - Accountability, how do we measure:
    - local partners
    - remote partners
    - others
