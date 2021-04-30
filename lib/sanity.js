import sanityClient from '@sanity/client';

console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
export const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
	useCdn: true,
	apiVersion: '2021-04-29'
});
