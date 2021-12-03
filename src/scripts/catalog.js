export const catalog = (harvestArray) => {
    const mainHTML = document.querySelector(".container");
    let html = ""
    for (const plant of harvestArray) {
        html += `<section class="plant">${plant.type}</section>`
    }
    mainHTML.innerHTML = html;
}