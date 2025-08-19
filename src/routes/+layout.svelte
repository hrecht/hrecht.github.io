<script>
	//import favicon from '$lib/assets/favicon.svg';
	import '../styles/style.css';

	const page_title = "Hannah Recht | Data Journalist",
		social_description = "Hannah Recht is a data journalist who investigates how the decisions made by people in power affect our lives using statistical analysis, graphics, and traditional reporting techniques.",
		canonical_url = "https://www.hrecht.com/",
		social_image = canonical_url + "assets/social-image-og.jpg",
		keywords = "Hannah Recht, data journalism, data journalist, graphics journalist, data, graphics, census"

	let { children } = $props();
</script>

<svelte:head>
	<!--link rel="icon" href={favicon} /-->

	<link rel="canonical" href={canonical_url}>

	<meta name="description" content={social_description}>
	<meta name="author" content="Hannah Recht">
	<meta name="news_keywords" content={keywords}>
	<meta property="og:title" content={page_title}>
	<meta property="og:site_name" content="Hannah Recht">
	<meta property="og:url" content={canonical_url}>
	<meta property="og:description" content={social_description}>
	<meta property="og:type" content="article">
	<meta property="og:locale" content="en_US">
	<meta property="og:image" content={social_image}>
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content={canonical_url}>
	<meta name="twitter:creator" content="@hannah_recht">
	<meta name="twitter:title" content={page_title}>
	<meta name="twitter:description" content={social_description}>
	<meta name="twitter:image:src" content={social_image}>
	<meta name="robots" content="max-image-preview:large">

	<title>{page_title}</title>

</svelte:head>

{@render children?.()}