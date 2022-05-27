const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'

const fetchCountries = () => {
    
    return axios.get(API_URL)
        .then(response => {
            return console.log(response.data)
        })

    }

    console.log(fetchCountries(API_URL))



