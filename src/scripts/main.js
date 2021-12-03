console.log("Welcome to the main module");
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan);

plantSeeds(yearlyPlan);

const harvestedPlants = harvestPlants(usePlants());
console.log(harvestedPlants);

catalog(harvestedPlants);