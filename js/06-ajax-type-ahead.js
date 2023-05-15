const cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');

fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

function displayMatches() {
    const matchArray = findMatches(this.value, cities);

    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'ig');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');

    document.querySelector('.suggestions').innerHTML = html;
}

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'ig');

        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
