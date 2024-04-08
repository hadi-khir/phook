import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					{
						name: "modern",
						enhancements: true
					},
					{
						name: "vintage",
						enhancements: true
					}
				],
			},
		}),
	],
} satisfies Config;
