import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		author: z.string(),
		image: z.string(),
		tag: z.string(),
		description: z.string()
	})
})

export const collections = {
	blog: blogCollection
}
