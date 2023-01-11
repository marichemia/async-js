import * as garage from './garage/garage-layout/garage-layout.js'
import * as winners from './winners/winners.js'

const viewContainer = document.createElement('div');


viewContainer.appendChild(garage.garageView);
viewContainer.appendChild(winners.winnersView);





export default viewContainer;