import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image(),
			img_alt: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()),
			img: image().optional(),
			img_alt: z.string().optional(),
			draft: z.boolean(),
			externalUrl: z.string().optional(),
			keywords: z.array(z.string()).optional(),
		}),
	})
};
