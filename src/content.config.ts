import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

export const collections = {
	work: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/work" }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				publishDate: z.coerce.date(),
				tags: z.array(z.string()),
				img: image(),
				img_alt: z.string().optional(),
			}),
	}),
	blog: defineCollection({
		loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/blog" }),
		schema: ({ image }) =>
			z.object({
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
	}),
};
