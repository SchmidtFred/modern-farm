export const harvestPlants = (plantsArray) => {
	const arrayToReturn = [];
	for (const plant of plantsArray) {
		let plantOutput = 0;
		if (plant.type === "Corn") {
			plantOutput = plant.output / 2;
		} else {
			plantOutput = plant.output;
		}
		for (let x = 0; x < plantOutput; x++) {
			arrayToReturn.push(plant);
		}
	}
	return arrayToReturn;
};
