<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	
	const navItems = [
		{ href: '/', label: 'About' },
		{ href: '/publications', label: 'Publications' },
		{ href: '/cv', label: 'CV' },
	];
	
	let mobileMenuOpen = false;
	
	onMount(() => {
		theme.init();
	});
</script>

<div class="min-h-screen flex flex-col">
	<!-- Navigation -->
	<nav class="bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-200">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex items-center">
					<a href="/" class="text-xl font-serif font-semibold text-academic-primary dark:text-blue-400">
						Calvin's Page
					</a>
				</div>
				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center space-x-6">
					{#each navItems as item}
						<a 
							href={item.href} 
							class="text-gray-600 hover:text-academic-primary dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200
								{$page.url.pathname === item.href ? 'text-academic-primary dark:text-blue-400 font-medium' : ''}"
						>
							{item.label}
						</a>
					{/each}
					<!-- Theme Toggle -->
					<button
						on:click={theme.toggle}
						class="p-2 rounded-md text-gray-600 hover:text-academic-primary dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
						aria-label="Toggle theme"
					>
						{#if $theme === 'light'}
							<Icon icon="ph:moon-bold" class="w-5 h-5" />
						{:else}
							<Icon icon="ph:sun-bold" class="w-5 h-5" />
						{/if}
					</button>
				</div>
				<!-- Mobile menu button and theme toggle -->
				<div class="md:hidden flex items-center space-x-2">
					<!-- Theme Toggle Mobile -->
					<button
						on:click={theme.toggle}
						class="p-2 rounded-md text-gray-600 hover:text-academic-primary dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
						aria-label="Toggle theme"
					>
						{#if $theme === 'light'}
							<Icon icon="ph:moon-bold" class="w-5 h-5" />
						{:else}
							<Icon icon="ph:sun-bold" class="w-5 h-5" />
						{/if}
					</button>
					<button
						on:click={() => mobileMenuOpen = !mobileMenuOpen}
						class="text-gray-600 hover:text-academic-primary dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if mobileMenuOpen}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>
		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div class="px-4 py-2 space-y-1">
					{#each navItems as item}
						<a 
							href={item.href} 
							on:click={() => mobileMenuOpen = false}
							class="block px-3 py-2 rounded-md text-gray-600 hover:text-academic-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 transition-colors duration-200
								{$page.url.pathname === item.href ? 'text-academic-primary bg-gray-50 dark:text-blue-400 dark:bg-gray-700 font-medium' : ''}"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>

	<!-- Main Content -->
	<main class="flex-grow">
		<slot />
	</main>

</div> 