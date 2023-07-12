const endPoints = [
    '/search/', '/collections/', '/resource/', '/item'
]


const searchBtn = document.querySelector('#searchBtn')
const searchInput = document.querySelector('#searchInput')

const search = (searchValue) => {
    url = `https://www.loc.gov/search/${encodeURIComponent(searchValue)}/?fo=json`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data;
        })
        .catch(error => console.log(error))   
}

search('baseball');