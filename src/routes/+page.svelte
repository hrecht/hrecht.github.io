<script>
	import sections from './_data/sections.json';
	import TextSection from './TextSection.svelte';
	import Projects from './Projects.svelte';
</script>

<div class="container">
	<header>
		<h1 class="name">Hannah Recht</h1>
		<h2 class="name-title">Data journalist</h2> 

		<div class="contacts">
			{#each sections.socials as d}
				<div class="contact-container">
					<a href={d.url} target="_blank">
						<!--span class="contact-icon" aria-hidden="true">{@html d.icon}</span-->
                        {d.title}
					</a>
				</div>
			{/each}
		</div>
	</header>

	<main>
		<section id="about">
			<h2 class="section-title">About</h2>
			{#each sections.intro as d}
				<p>{@html d.value}</p>
			{/each}
		</section>

		<TextSection id="software" data={sections.software} title="Software" />

		<Projects id="projects" title="Projects" />

		<TextSection id="talks" data={sections.talks} title="Selected Talks and Teaching" />
	</main>
</div>
