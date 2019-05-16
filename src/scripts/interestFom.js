import API from "./dbCalls"

function addInterest() {
    const nameInterest = document.getElementById("form_interest").value
    console.log("nameInterest", nameInterest);
     const interestDis = document.getElementById("interest_disc").value
     console.log(interestDis);
    const interestPrice = document.getElementById("form_price").value
    console.log(interestPrice);
    const placeName = document.getElementById("country").value
    console.log(placeName);
    const newPoint = {
        name: nameInterest,
        description: interestDis,
        cost: interestPrice,
        placeId: placeName
    }
    console.log("new", newPoint);
    API.postCall("interests", newPoint);
    document.location.reload()
}

export default addInterest;