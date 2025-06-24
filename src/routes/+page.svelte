<script lang="ts">
	// Profile image is loaded from static folder
</script>

<svelte:head>
	<title>Calvin Xu - Computer Science PhD Student at UIUC</title>
	<meta name="description" content="Calvin Xu is a 4th year PhD Student in Computer Science at UIUC, focused on trustworthy machine learning and formal methods." />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		<!-- Profile Section -->
		<div class="md:col-span-1">
			<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-6 transition-colors duration-200">
				<div class="mb-6">
					<div class="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
						<img 
							src="/profile.jpg" 
							alt="Calvin Xu" 
							class="w-full h-full object-cover"
						/>
					</div>
				</div>
				<h1 class="text-2xl font-serif font-bold text-center mb-2 dark:text-gray-100">
					Calvin Xu
				</h1>
				<p class="text-center text-gray-600 dark:text-gray-400 mb-4">Changming Xu (徐沧溟)</p>
				<p class="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
					Computer Science PhD Candidate<br />
					University of Illinois Urbana-Champaign
				</p>
				
				<!-- Contact Info -->
				<div class="space-y-2 text-sm">
					<div class="flex items-center space-x-2">
						<span class="text-gray-500 dark:text-gray-500">📍</span>
						<span class="dark:text-gray-300">Champaign, IL</span>
					</div>
					<div class="flex items-center space-x-2">
						<span class="text-gray-500 dark:text-gray-500">📧</span>
						<a href="mailto:cx23@illinois.edu" class="text-academic-accent dark:text-purple-400 hover:underline">
							cx23@illinois.edu
						</a>
					</div>
					
					<!-- Social Links -->
					<div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
						<div class="flex flex-wrap gap-2">
							<a href="https://scholar.google.com/citations?user=_Zg49pIAAAAJ&hl=en&oi=ao" 
							   target="_blank" rel="noopener"
							   class="inline-flex items-center px-3 py-1 text-xs font-medium text-academic-primary dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
								Google Scholar
							</a>
							<a href="https://github.com/cmxu" 
							   target="_blank" rel="noopener"
							   class="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
								GitHub
							</a>
							<a href="https://www.linkedin.com/in/calvin-xu-8236451a2/" 
							   target="_blank" rel="noopener"
							   class="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
								LinkedIn
							</a>
							<a href="https://orcid.org/0000-0003-3079-5652" 
							   target="_blank" rel="noopener"
							   class="inline-flex items-center px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200">
								ORCID
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bio Section -->
		<div class="md:col-span-2">
			<div class="prose prose-academic">
				<p>
					I am a 4th year PhD Student in the Department of Computer Science at the University of Illinois 
					Urbana-Champaign (UIUC). I am focused on making <strong>trustworthy machine learning</strong> 
					techniques <strong>usable</strong> in the <strong>real world</strong>. My research lies at 
					the intersection between <strong>ML</strong> and <strong>formal methods</strong>. I am broadly 
					interested in the generation of practical adversarial examples, certified training, and neural 
					network verification for the vision, NLP, and wireless application areas. Recently, I have been 
					working on LLM reasoning/efficiency and the using LLMs to improve classification.
				</p>
				
				<p>
					I am currently working on a PhD in Computer Science at UIUC advised by 
					<a href="https://ggndpsngh.github.io" target="_blank" rel="noopener">Prof. Gagandeep Singh</a>. 
					In the Fall semester of 2024, I was an intern at TikTok in 
					<a href="https://www.linkedin.com/in/xinghai-h-80316360/" target="_blank" rel="noopener">Xinghai Hu's</a> 
					Responsible Recommendation Systems team working with 
					<a href="https://www.linkedin.com/in/jiachensun23/" target="_blank" rel="noopener">Jiachen Sun</a> 
					working on VLM's for content Safety. I am currently an intern at Meta.
				</p>
				
				<p>
					Before my PhD, I spent two years working at 
					<a href="https://www.ll.mit.edu/r-d/cyber-security-and-information-sciences" target="_blank" rel="noopener">
						MIT Lincoln Laboratory
					</a> in the Cybersecurity/ML group. I previously obtained my Masters and Bachelors at 
					Washington University in St. Louis in 2018 where I worked with 
					<a href="https://www.cse.wustl.edu/~angelee/home_page/" target="_blank" rel="noopener">Prof. Angelina Lee</a> 
					and <a href="https://www.cse.wustl.edu/~kunal/" target="_blank" rel="noopener">Prof. Kunal Agrawal</a>.
				</p>
				
				<!-- <p class="bg-academic-light dark:bg-gray-800 p-4 rounded-lg border border-transparent dark:border-gray-700">
					I am always excited to talk about new ideas in adversarial/robust/certifiable machine learning, 
					computer vision, and other trustworthy ML topics. Feel free to shoot me an 
					<a href="mailto:cx23@illinois.edu">email</a> anytime.
				</p> -->

				<h2>Side Projects</h2>
				<ul class="space-y-2">
					<li>
						<a href="https://geo.cmxu.io" target="_blank" rel="noopener" 
						   class="text-academic-accent dark:text-purple-400 hover:underline">
							<strong>WhereAmI</strong>
						</a> - Create location guessing games with your own pictures or choose from a list of curated images
					</li>
					<li>
						<a href="https://24pp.cmxu.io" target="_blank" rel="noopener" 
						   class="text-academic-accent dark:text-purple-400 hover:underline">
							<strong>24++</strong>
						</a> - An upgraded version of 24 where the goal is to create 3-digit numbers with (+,-,/,*) operations and 7 cards
					</li>
					<li>
						<strong>[In Development]</strong> - An agentic AI powered latex editor
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
