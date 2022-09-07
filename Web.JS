const buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function (event) {
    console.log(this)

    if (event.target.tagName === "BUTTON") {
        const whatWasOrder = event.target.classList[0];


        console.log(event.target);
    } else {
        console.log("No button was clicked on...")
    }
})

function logwhatWasOrder(event) {
    const whatWasOrder = event.target.classList[0];
    console.log(whatWasOrder)
}
const cappucinoButton = document.getElementsByClassName("cap")[0];

cappucinoButton.addEventListener("click", () => {
    "Thank you!";
    logwhatWasOrder
   
})


const espressoButton = document.getElementsByClassName("spro")[0];

espressoButton.addEventListener("click", () => {
    "Thank you!";
    logwhatWasOrder
   
})


const latteButton = document.getElementsByClassName("latte")[0];

latteButton.addEventListener("click", () => {
    "Thank you!";
    logwhatWasOrder
    
})

const dripButton = document.getElementsByClassName("fetco")[0];

dripButton.addEventListener("click", () => {
    "Thank you!";
    logwhatWasOrder
   
})