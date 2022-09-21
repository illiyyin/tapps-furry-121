export const formatNumber = (value: number | string) => {
	let data = value;
	if (typeof data === "string") {
		data = parseInt(data);
	}
	return new Intl.NumberFormat().format(data);
};
