const button = document.getElementById('Get-location-button')




async function gotLocation(position) {
    const result = await getData(
        position.coords.latitude,
        position.coords.longitude
    )
    console.log(result)
}


function failedToGet() {
    console.log("There was an issue")
}

async function getData(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=98a6cb21340e4a1aa8092317231612&q=${lat},${long}&aqi=yes`)
    return await promise.json()
}

button.addEventListener('click', async() => {
    const result = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)

})