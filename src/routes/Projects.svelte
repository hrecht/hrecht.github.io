<script>
	import proj from './_data/projects.json';
	const data = proj.projects;

	let { id, title } = $props();
</script>

<section {id}>
	<h2 class="section-title">{title}</h2>
	{#each data as d}
		<div class="project-feature flex">
			<div class="flex-child flex-text">
				<h3 class="feature-project-title">
					{#if d.url}
						<a href={d.url} target="_blank" class="project-link">{d.title}</a>
					{:else}
						{d.title}
					{/if}
				</h3>
				<div class="type">{d.outlet}</div>

				{#each d.description as desc}
					<p>{@html desc.value}</p>
				{/each}

				{#if d.urls}
					<ul>
						{#each d.urls as u}
							<li><a href={u.url} target="_blank">{u.title}</a></li>
						{/each}
					</ul>
				{/if}

				{#if d.highlight}
					{#each d.highlight as desc}
						<p><span class="star" aria-hidden="true">&#9733</span> {@html desc.value}</p>
					{/each}
				{/if}
			</div>

			<div class="flex-child flex-img">
				<img src={d.image.src} alt={d.image.alt} />
			</div>
		</div>
	{/each}
</section>

<style>
	.project-feature {
		padding-top: 30px;
		padding-bottom: 30px;
	}

	.project-feature:not(:last-of-type) {
		border-bottom: 0.75px solid #afafaf;
	}

    .star {
        color: var(--color-highlight);
    }

	.flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media only screen and (max-width: 700px) {
		.flex-child {
			flex: 0 0 100%;
			margin-bottom: 20px;
		}
	}

	@media only screen and (min-width: 699px) {
		.flex-text {
			flex: 0 1 calc(60% - 30px);
		}

		.flex-img {
			flex: 0 1 calc(40% - 30px);
		}
	}

	img {
		float: left;
		height: auto;
		display: block;
		max-width: 100%;
	}
</style>
