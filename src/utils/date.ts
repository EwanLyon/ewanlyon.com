const siteTimeZone = "Australia/Melbourne";

const siteDateFormatter = new Intl.DateTimeFormat("en-AU", {
	year: "numeric",
	month: "short",
	day: "numeric",
	timeZone: siteTimeZone,
});

const siteDateTimeFormatter = new Intl.DateTimeFormat("en-AU", {
	year: "numeric",
	month: "short",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	timeZone: siteTimeZone,
	timeZoneName: "short",
});

export function formatSiteDate(date: Date): string {
	return siteDateFormatter.format(date);
}

export function formatSiteDateTime(date: Date): string {
	return siteDateTimeFormatter.format(date);
}
