import { component, defineMarkdocConfig } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
	tags: {
		aside: {
			render: component("./src/components/Aside.astro"),
			attributes: {
				type: { type: String, matches: ["note", "tip", "caution", "danger"], default: "note" },
				title: { type: String },
			},
		},
		youtube: {
			render: component("./src/components/blog/common/YouTube.astro"),
			selfClosing: true,
			attributes: {
				videoId: { type: String, required: true },
				timestamp: { type: String },
			},
		},
		caption: {
			render: component("./src/components/Caption.astro"),
		},
	},
});
