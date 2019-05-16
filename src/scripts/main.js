import domDisplay from "./domDisplay";
import addInterest from "./interestFom";


console.log("helloo");
domDisplay();

document.getElementById("btn_add_interest").addEventListener("click", event => {
    event.preventDefault()
    console.log("event", event);
    addInterest()
})
