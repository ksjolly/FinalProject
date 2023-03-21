
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_KEY = 'G2CH68AZ4NLmqP4YeSko5iJZBdwxLlko';



export const Selected = () => {
    const params = useParams();

    useEffect(() => {
        const url = `${BASE_URL}${params?.id}&api-key=${API_KEY}`;
        console.log('the url is as follows');
        console.log(url);
        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then(function (responseJson) {
                console.log(responseJson);
                // for empty returns
                let noresults = {"movie_title": "Try a different book- no info available",
                                "summary": "No summary available",
                                "byline": "no byline"};
                let results = responseJson.results[0] ? responseJson.results[0]  : noresults;
                console.log('what are our results');
                console.log(results);
                return results;
      
            })
            .then(function (results) {
                console.log('did we get here');
                console.log(results);
                const bookEl = document.getElementById('book-container');
                bookEl.innerHTML 
                  = `<section> <div class = "flex-container">
                  <div class = "card"></a> <div class = "container"> <h3 class = "h3-title"> ${results.display_title} </h3>  <h5> ${results.byline} </h5> <p class = "cardp"> ${results.summary_short} </p> </div> </div>
                  </div> </section>`
            })
        console.log('we got here');
    })

    return (

        <div>
           <h2>This is the Selected Movie Detail page</h2> 
            <p>The id is {params?.id}</p>
            <div id='book-container'>
                display movies here
            </div>
        </div>
    )
}