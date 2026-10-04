import { config, fields, collection } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";

const contentComponents = {
	aside: wrapper({
		label: "Aside",
		schema: {
			type: fields.select({
				label: "Type",
				options: [
					{ label: "Note", value: "note" },
					{ label: "Tip", value: "tip" },
					{ label: "Caution", value: "caution" },
					{ label: "Danger", value: "danger" },
				],
				defaultValue: "note",
			}),
			title: fields.text({ label: "Title" }),
		},
	}),
	youtube: block({
		label: "YouTube",
		schema: {
			videoId: fields.text({ label: "Video ID", validation: { isRequired: true } }),
			timestamp: fields.text({ label: "Start time (seconds)" }),
		},
	}),
	caption: wrapper({
		label: "Caption",
		schema: {},
	}),
};

const dateFieldDescription =
	"Enter a UTC time. Dates are displayed in Australia/Melbourne time; 14 Aug 2026 at 11:00 pm AEST is 14 Aug 2026 at 13:00 UTC.";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		blog: collection({
			label: "Blog",
			slugField: "title",
			path: "src/content/blog/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				description: fields.text({ label: "Description" }),
				publishDate: fields.datetime({
					label: "Publish Date",
					description: dateFieldDescription,
				}),
				updatedDate: fields.datetime({
					label: "Updated Date",
					description: dateFieldDescription,
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tag",
					itemLabel: (props) => props.value,
				}),
				img: fields.image({ label: "Image", directory: "src/assets/blog", publicPath: "@assets/blog/" }),
				img_alt: fields.text({ label: "Image Alt" }),
				draft: fields.checkbox({ label: "Draft" }),
				externalUrl: fields.text({ label: "External URL" }),
				keywords: fields.array(fields.text({ label: "Keyword" }), {
					label: "Keyword",
					itemLabel: (props) => props.value,
				}),
				content: fields.markdoc({
					label: "Content",
					components: contentComponents,
					options: {
						image: {
							directory: "src/assets/blog",
							publicPath: "@assets/blog/",
						},
					},
				}),
			},
		}),
		work: collection({
			label: "Work",
			slugField: "title",
			path: "src/content/work/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				description: fields.text({ label: "Description" }),
				publishDate: fields.datetime({
					label: "Publish Date",
					description: dateFieldDescription,
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tag",
					itemLabel: (props) => props.value,
				}),
				img: fields.image({ label: "Image", directory: "src/assets/work", publicPath: "@assets/work/" }),
				img_alt: fields.text({ label: "Image Alt" }),
				content: fields.markdoc({
					label: "Content",
					components: contentComponents,
					options: {
						image: {
							directory: "src/assets/work",
							publicPath: "@assets/work/",
						},
					},
				}),
			},
		}),
	},
});
