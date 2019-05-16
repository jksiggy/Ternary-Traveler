import API from "./dbCalls";

const domDipslay = () => {
    API.getCall("places").then(result => {
        result.forEach(placesObj => {
            console.log("placesObj", placesObj);
            const frag = document.createDocumentFragment()
            const placeDiv = document.createElement("div");
            const placeName = document.createElement("h3");
            placeName.textContent = placesObj.name;
            placeDiv.appendChild(placeName);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete"
            placeDiv.appendChild(deleteButton)
            deleteButton.addEventListener("click", event => {
                console.log(event);
                deleteMe()
            })
            frag.appendChild(placeDiv);
            document.getElementById("interest_display").appendChild(frag);
            function deleteMe() {
                API.deleteCall("places", placesObj.id)
                    .then(document.location.reload(true));
            }
        })
    });

}

export default domDipslay;