const plantsArray = [];

export const addPlant = (seed) => {
	if (Array.isArray(seed)) {
        seed.map(corn => plantsArray.push(corn));
	} else {
		plantsArray.push(seed);
	}
};

export const usePlants = () => {
	return plantsArray.map((plant) => ({ ...plant }));
};
