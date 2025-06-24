<script lang="ts">
	import { publications, getPublicationsByYear } from '$lib/data/publications';
	
	const publicationsByYear = getPublicationsByYear();
	
	// Extract unique tags for filtering
	const allTags = new Set<string>();
	publications.forEach(pub => {
		pub.tags?.forEach(tag => allTags.add(tag));
	});
</script>

<svelte:head>
	<title>Publications - Calvin Xu</title>
	<meta name="description" content="Research publications by Calvin Xu in trustworthy machine learning, adversarial examples, and neural network verification." />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-serif font-bold text-academic-primary dark:text-blue-400 mb-8">Publications</h1>
	
	
	<!-- Publications List -->
	<div class="space-y-8">
		{#each [...publicationsByYear.entries()] as [year, pubs]}
			<div>
				<h2 class="text-2xl font-serif font-bold text-academic-secondary dark:text-blue-300 mb-4">
					{year}
				</h2>
				<div class="space-y-4">
					{#each pubs as pub}
						<div class="publication-item">
							<h3 class="text-lg font-semibold mb-2 dark:text-gray-100">
								{#if pub.paperUrl && pub.paperUrl !== '#'}
									<a href={pub.paperUrl} 
									   target="_blank" 
									   rel="noopener"
									   class="text-academic-primary hover:text-academic-secondary dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
										{pub.title}
									</a>
								{:else}
									{pub.title}
								{/if}
							</h3>
							<p class="text-gray-700 dark:text-gray-300 mb-2" style="font-size: 0.95rem;">
								{@html pub.authors
									.replace('Changming Xu', '<strong>Changming Xu</strong>')
									.replace(/\*/g, '')}
							</p>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								<span class="font-medium">{pub.venue}</span> • {new Date(pub.date).getFullYear()}
								{#if pub.paperUrl && pub.paperUrl !== '#'}
									• <a href={pub.paperUrl} 
									     target="_blank" 
									     rel="noopener"
									     class="text-academic-accent dark:text-purple-400 hover:underline">
										PDF
									</a>
								{/if}
							</p>
							{#if pub.tags && pub.tags.length > 0}
								<div class="mt-2">
									{#each pub.tags as tag}
										<span class="inline-block px-2 py-1 mr-2 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
											{tag}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	
	
	<!-- Note about equal contribution -->
	{#if publications.some(p => p.authors.includes('*'))}
		<div class="mt-8 text-sm text-gray-600">
			<p>* Denotes equal contribution</p>
		</div>
	{/if}
	
	<!-- Google Scholar Link -->
	<div class="mt-12 text-center">
		<a href="https://scholar.google.com/citations?user=_Zg49pIAAAAJ&hl=en&oi=ao" 
		   target="_blank"
		   rel="noopener"
		   class="inline-flex items-center space-x-2 text-academic-accent hover:underline">
			<span>View all publications on Google Scholar</span>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
			</svg>
		</a>
	</div>
</div> 