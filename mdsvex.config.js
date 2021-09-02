//import toc from 'rehype-toc'
import rehypeSlug from "rehype-slug"
import addClasses from "rehype-add-classes" //https://github.com/martypdx/rehype-add-classes

const config = {
  "layout": {
    "blog": "./src/lib/__blog.svelte",
    "person": "./src/lib/__person.svelte",
    "article": "./src/lib/__article.svelte"
  },

  "extensions": [".svelte.md", ".md"],
  //`"extensions": [".svelte.md", ".md", ".svx", ".markdown"],` These have been removed for simplicity: https://youtu.be/yKPC316i_gI?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&t=727

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [
    //toc,
    rehypeSlug,
    [addClasses, {
      "h1, h2, h3, h4, h5, h6, header, blockquote": "lh-title",//tc
      "ul, ol": "pl0",
      //"ul, ol": "pl4", // under paragraph
      "a": "underline b link o-80 glow inherit hover-o-100 underline-hover transition",
      "hr": "ba bw1 mb0 inherit o-10",
      "blockquote": "db georgia ml3 mr0 i tr",
      "blockquote p": "fw5 f3 o-80",
      "blockquote a": "pt2 b system f7 tracked ttu fs-normal no-underline db", //sans-serif
      "table": "w-100 f5",
      "article, section, ul, li, p": "lh-copy"
      /*"button": "input-reset pointer mv2 br0 f6 f5-ns b ph4 ph5-ns ph5-m ph6-m pv3 ba bw2-ns b--black white bg-dark-gray ttu tracked-mega hover-bg-near-black w-100 db transition",
      "input": "input-reset br0 bn pa3 w-100 bg-white-90 transition",
      "select": "input-reset select-reset br0 bn pa3 w-100 f5 f5-ns mr0 bg-white-90",*/

    }]
  ]
};

export default config;