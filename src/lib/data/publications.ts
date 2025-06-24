export interface Publication {
	id: string;
	title: string;
	authors: string;
	venue: string;
	date: string;
	year: number;
	paperUrl?: string;
	abstract?: string;
	tags?: string[];
}

export const publications: Publication[] = [
	{
		id: 'iclr-2025',
		title: 'Support is All You Need for Certified VAE Training',
		authors: 'Changming Xu, Debangshu Banerjee, Deepak Vasisht, Gagandeep Singh',
		venue: 'ICLR',
		date: '2025-04-24',
		year: 2025,
		paperUrl: 'https://openreview.net/pdf?id=oZkqkkvdND',
		tags: ['certified training', 'VAE', 'adversarial robustness']
	},
	{
		id: 'saiv-2024',
		title: 'Scalable Relational Verification and Training for Deep Neural Networks',
		authors: 'Debangshu Banerjee, Changming Xu, Gagandeep Singh',
		venue: 'SAIV',
		date: '2024-07-22',
		year: 2024,
		paperUrl: 'https://ggndpsngh.github.io/files/SAIV2024.pdf',
		tags: ['verification', 'neural networks', 'certified training']
	},
	{
		id: 'eccv-2024',
		title: 'Cross-Input Certified Training for Universal Perturbations',
		authors: 'Changming Xu, Gagandeep Singh',
		venue: 'ECCV',
		date: '2024-09-08',
		year: 2024,
		paperUrl: 'https://arxiv.org/pdf/2405.09176',
		tags: ['certified training', 'universal perturbations', 'adversarial robustness']
	},
	{
		id: 'icml-2024',
		title: 'Robust Universal Adversarial Perturbations',
		authors: 'Changming Xu, Gagandeep Singh',
		venue: 'ICML',
		date: '2024-07-21',
		year: 2024,
		paperUrl: 'https://arxiv.org/abs/2206.10858',
		tags: ['adversarial examples', 'universal perturbations', 'robustness']
	},
	{
		id: 'pldi-2024',
		title: 'Input-Relational Verification of Deep Neural Networks',
		authors: 'Debangshu Banerjee, Changming Xu, Gagandeep Singh',
		venue: 'PLDI',
		date: '2024-06-24',
		year: 2024,
		paperUrl: 'https://dl.acm.org/doi/pdf/10.1145/3656377',
		tags: ['verification', 'neural networks', 'formal methods']
	},
	{
		id: 'iclr-tiny-2024',
		title: 'Bypassing the Safety Training of Open-Source LLMs with Priming Attacks',
		authors: 'Jason Vega*, Isha Chaudhary*, Changming Xu*, Gagandeep Singh',
		venue: 'ICLR Tiny Paper',
		date: '2024-05-07',
		year: 2024,
		paperUrl: 'https://arxiv.org/pdf/2312.12321',
		tags: ['LLM safety', 'priming attacks', 'adversarial']
	},
	{
		id: 'nsdi-2023',
		title: 'Exploring Practical Vulnerabilities of Machine Learning-based Wireless Systems',
		authors: 'Zikun Liu, Changming Xu, Emerson Sie, Gagandeep Singh, Deepak Vasisht',
		venue: 'NSDI',
		date: '2023-04-17',
		year: 2023,
		paperUrl: 'https://www.usenix.org/conference/nsdi23/presentation/liu-zikun',
		tags: ['wireless systems', 'adversarial', 'machine learning']
	},
	{
		id: 'soda-2018',
		title: 'Race Detection and Reachability in Nearly Series-Parallel DAGs',
		authors: 'Kunal Agrawal, Joseph Devietti, Jeremy T. Fineman, I-Ting Angelina Lee, Robert Utterback, Changming Xu',
		venue: 'ACM-SIAM SODA',
		date: '2018-01-07',
		year: 2018,
		paperUrl: 'https://epubs.siam.org/doi/abs/10.1137/1.9781611975031.11',
		tags: ['parallel computing', 'race detection', 'algorithms']
	}
];

export function getPublicationsByYear(): Map<number, Publication[]> {
	const grouped = new Map<number, Publication[]>();
	
	publications.forEach(pub => {
		if (!grouped.has(pub.year)) {
			grouped.set(pub.year, []);
		}
		grouped.get(pub.year)!.push(pub);
	});
	
	// Sort years in descending order
	return new Map([...grouped.entries()].sort((a, b) => b[0] - a[0]));
} 