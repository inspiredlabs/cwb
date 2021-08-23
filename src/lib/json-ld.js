// https://svelte.dev/repl/3382db29fc864d60b0a4ca47b3707a95?version=3.38.2
import site from './site.json'
import org from './organization.json'

export function serializeSchema(thing) {
return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`
}

export const websiteSchema = {
'@context': 'https://schema.org',
'@type': 'WebSite',
name: site.title||undefined,
url: site.url||undefined,
description: site.description||undefined,
sameAs: [
  `https://twitter.com/${site.social.twitter}`,
  `https://www.youtube.com/${site.social.youtube}`,
  `https://www.instagram.com/${site.social.instagram}`,
  `https://www.facebook.com/${site.social.facebook}`,
  `https://uk.linkedin.com/${site.social.linkedin}`,
  `${site.social.website}`,
  ],
}

export const orgSchema = {
"@context": "https://schema.org",
"@type": "Organization",
"name": org.name||undefined,
"url": org.url||undefined,
"logo": org.logo||undefined,
"image": org.image||undefined,
"description": org.description||undefined,
"address": {
  "@type": "PostalAddress",
  "streetAddress": org.address.streetAddress||undefined,
  "addressLocality": org.address.addressLocality||undefined,
  "postalCode": org.address.postalCode||undefined,
  "addressCountry": org.address.addressCountry||undefined
  }
}