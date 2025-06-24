<svelte:head>
	<title>CV - Calvin Xu</title>
	<meta name="description" content="Curriculum Vitae of Calvin Xu, Computer Science PhD Candidate at UIUC" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="flex justify-between items-center mb-8">
		<h1 class="text-4xl font-serif font-bold text-academic-primary dark:text-blue-400">Curriculum Vitae</h1>
		<a 
			href="/cv.pdf" 
			download="Calvin_Xu_CV.pdf"
			class="btn-primary inline-flex items-center space-x-2"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
			</svg>
			<span>Download CV</span>
		</a>
	</div>
	
	<!-- PDF Viewer -->
	<div class="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-4 transition-colors duration-200">
		<iframe 
			src="/cv.pdf" 
			class="w-full rounded bg-white"
			style="height: 900px;"
			title="Calvin Xu's CV"
		>
			<p class="text-center py-8 dark:text-gray-300">
				Your browser does not support PDF viewing. 
				<a href="/cv.pdf" class="text-academic-accent dark:text-purple-400 hover:underline">
					Click here to download the CV.
				</a>
			</p>
		</iframe>
	</div>
	
	<!-- Quick Info -->
	<div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg transition-colors duration-200">
			<h3 class="font-semibold text-lg mb-2 text-academic-primary dark:text-blue-400">Education</h3>
			<p class="text-gray-700 dark:text-gray-300">PhD in Computer Science</p>
			<p class="text-sm text-gray-600 dark:text-gray-400">University of Illinois Urbana-Champaign</p>
			<p class="text-sm text-gray-600 dark:text-gray-400">Expected 2026</p>
		</div>
		<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg transition-colors duration-200">
			<h3 class="font-semibold text-lg mb-2 text-academic-primary dark:text-blue-400">Research Focus</h3>
			<p class="text-gray-700 dark:text-gray-300">Trustworthy Machine Learning</p>
			<p class="text-sm text-gray-600 dark:text-gray-400">Adversarial Examples</p>
			<p class="text-sm text-gray-600 dark:text-gray-400">Neural Network Verification</p>
		</div>
		<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg transition-colors duration-200">
			<h3 class="font-semibold text-lg mb-2 text-academic-primary dark:text-blue-400">Experience</h3>
			<p class="text-gray-700 dark:text-gray-300">TikTok (Fall 2024)</p>
			<p class="text-gray-700 dark:text-gray-300">MIT Lincoln Lab (2018-2020)</p>
			<p class="text-sm text-gray-600 dark:text-gray-400">Meta (Summer 2025)</p>
		</div>
	</div>
</div> 