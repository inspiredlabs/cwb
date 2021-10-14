// Manually add: medium.com/codex/getting-started-with-sveltekit-369987d924bd
/*
export const routes = [
	{ href: '/', header: 'pl2', title: 'Home' },
	{ href: '/about-us', header: 'pl2', title: 'About Us' },
	{ href: '/courses', header: 'pl2', title: 'Courses' },
	{ href: '/our-approach', header: 'pl2', title: 'Our Approach' },
	{ href: '/support-us', header: 'pl2', title: 'Support Us' }
];
*/

export const routesAbout = [
	//{ href: '/', header: 'pl0', title: 'Home' },
	{ href: '/about', header: 'b', title: 'About' },
		// { href: '/about#our-impact', header: 'b', title: 'Our Impact' },
		{ href: '/about#awards', header: 'pl0', title: 'Awards' },// \& Recognition
		//{ href: '/news', header: 'pl0', title: 'News' },
		{ href: '/about#who-we-are', header: 'b', title: 'Who We Are' },
		{ href: '/about#core-team', header: 'pl0', title: 'Core Team' },
		{ href: '/about#facilitators', header: 'pl0', title: 'Facilitators' },
		{ href: '/about#trustees', header: 'pl0', title: 'Trustees' },
];

export const routesSupport = [
	{ href: '/support-us', header: 'b', title: 'Support Us' },
		{ href: '/support-us#partners', header: 'pl0', title: 'Partners' },
	{ href: '/support-us#work-with-us', header: 'b', title: 'Work with Us' },
		{ href: '/support-us#volunteers', header: 'pl0', title: 'Volunteers' },
		{ href: '/support-us#facilitators', header: 'pl0', title: 'Facilitators' },
	{ href: '/support-us#fundraising', header: 'b', title: 'Fundraising' },
		{ href: '/support-us#where-your-money-goes', header: 'pl0', title: 'Where Your Money Goes' },
  	{ href: '/support-us#donate', header: 'pl0', title: 'Donate' },
	{ href: '/support-us#social-media', header: 'b', title: 'Social Media' },
  	{ href: '/support-us#subscribe', header: 'pl0', title: 'Subscribe to our newsfeed' }, // Blog, microblog, news
];

export const routesCourses = [
  { href: '/courses', header: 'b', title: 'Courses' },
    { href: '/courses#programme-delivery', header: 'pl0', title: 'Programme Delivery' },
		{ href: '/courses#training-for-facilitators', header: 'pl0', title: 'Training for Facilitators' },
    { href: '/courses#monitoring-and-evaluation', header: 'pl0', title: 'Monitoring \& Evaluation' },
    // { href: '/courses#login', header: 'b', title: 'Login' },
];

export const routesRegulation = [
  { href: '/regulation', header: 'b', title: 'Regulation' },
    { href: '/regulation#charity-regulation', header: 'pl0', title: 'Charity Regulation' },
    { href: '/regulation#code-of-ethics', header: 'pl0', title: 'Code of Ethics' },
    { href: '/regulation#privacy-policy', header: 'pl0', title: 'Privacy Policy' },
];
