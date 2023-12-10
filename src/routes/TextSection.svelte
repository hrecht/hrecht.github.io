<script>
	let { id, data, title } = $props();
</script>

<section {id}>
	<h2 class="section-title">{title}</h2>
	{#each data as d}
		<div class="text-project">
			<h3 class="{id}-project-title">
				{#if d.url}
					<a href={d.url} target="_blank">{d.title}</a>
				{:else}
					{d.title}
				{/if}
			</h3>

			{#if d.type}
				<div class="type">{d.type}</div>
			{/if}

			<p>{d.description}</p>
		</div>
	{/each}
</section>

<style>
	.text-project {
		margin-bottom: 1.5em;
	}

	.talks-project-title {
		font-weight: 400;
		font-size: var(--text-p);
		margin-bottom: 0px;
		margin-top: 0px;
	}

</style>
