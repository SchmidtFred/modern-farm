import {addPlant} from "./field.js";
import { createWheat } from "./seeds/wheat.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"

export const plantSeeds = (yearPlan) => {
    for (const row of yearPlan) {
        for (const plant of row) {
            let newPlant = {};
            switch (plant) {
                
                case "Asparagus" :
                    newPlant = createAsparagus();
                    break;
                
                case "Corn" :
                    newPlant = createCorn();
                    break;

                case "Potato":
                    newPlant = createPotato();
                    break;

                case "Soybean":
                    newPlant = createSoybean();
                    break;

                case "Sunflower":
                    newPlant = createSunflower();
                    break;

                case "Wheat":
                    newPlant = createWheat();
                    break;

                default:
                    break;
            }
            addPlant(newPlant);
        }
    }
};