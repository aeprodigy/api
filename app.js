const api_link = "https://api.wheretheiss.at/v1/satellites/25544";

async function getPosition(){

    const response = await fetch(api_link);
    const data = await response.json();
    const {latitude, longitude} = data;
    
    document.getElementById('lat').textContent = latitude;
    
    document.getElementById('lon').textContent = longitude;
}
getPosition();