import { Dict } from "./model";

export const formatNumber = (value: number | string) => {
	let data = value;
	if (typeof data === "string") {
		data = parseInt(data);
	}
	return new Intl.NumberFormat().format(data);
};

export const getRandomId = () => {
	let count = "";
	while (count.length < 5) {
		const id = Math.random().toString(36).slice(2);
		if (!["1", "i", "I", "0", "o", "O"].includes(id[0])) {
			count += id[0];
		}
	}
	return count.toUpperCase();
};

export const dictShipping: Dict = {
	"GO-SEND": "today",
	"Personal Courier": "1 day",
	JNE: "2 days",
};