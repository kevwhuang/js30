const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

let lat;
let lon;

setInterval(getPosition, 1000);

function getDistance(latNew, lonNew) {
    const pr = Math.PI / 180;
    const φ1 = lat * pr;
    const φ2 = latNew * pr;
    const Δφ = (latNew - lat) * pr;
    const Δλ = (lonNew - lon) * pr;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2)
        + Math.cos(φ1) * Math.cos(φ2)
        * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    return 7917.5 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getHeading(latNew, lonNew) {
    const x = Math.cos(latNew) * Math.sin(lonNew - lon);
    const y = Math.cos(lat) * Math.sin(latNew)
        - Math.sin(lat) * Math.cos(latNew) * Math.cos(lonNew - lon);
    const β = Math.atan2(x, y);

    return Math.round(β * 180 / Math.PI);
}

function getPosition() {
    navigator.geolocation.getCurrentPosition(pos => {
        const latNew = pos.coords.latitude;
        const lonNew = pos.coords.longitude;
        const distance = getDistance(latNew, lonNew);
        const heading = getHeading(latNew, lonNew);

        [lat, lon] = [latNew, lonNew];
        if (distance) speed.textContent = (distance / (1 / 3600)).toFixed(3);
        if (heading) arrow.style.transform = `rotate(${heading}deg)`;
    }, err => console.error(err));
}
