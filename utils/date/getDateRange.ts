export const getDateRange = (startDate: Date, endDate: Date) => {
	const date = new Date(startDate.getTime());
	const dateRange = [];

	while (date <= endDate) {
		dateRange.push(new Date(date));
		date.setDate(date.getDate() + 1);
	}

	return dateRange;
};
