import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import LargeMovieCard from '../components/LargeMovieCard'


const BASE_URL_NYT = 'https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key='
const API_KEY_NYT = 'G2CH68AZ4NLmqP4YeSko5iJZBdwxLlko'
const BASE_URL_OMDB = 'https://omdbapi.com?'
const API_KEY_OMDB = '&apikey=3e2785f0';

export const Home = () => {

    let sampleData = { "Title": "Gone With the Wind", "summary": "Love and Romance" }
    const [movie, setMovie] = useState(undefined);

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

    useEffect(() => {
        console.log('We started useEffect');
        console.log(searchTerm);
        let url = `${BASE_URL_NYT}${API_KEY_NYT}`;
        if(searchTerm =='A.O. Scott') {
            console.log(searchTerm);
            url = `https://api.nytimes.com/svc/movies/v2/critics/A.%20O.%20Scott.json?api-key=G2CH68AZ4NLmqP4YeSko5iJZBdwxLlko`;
        }

        else if(searchTerm=='Manohla Dargis') {
            console.log(searchTerm);
        }
        
        let urlMap = [];
        console.log('the url is as follows');
        console.log(url);

        fetch(url)
            .then(function (data) {
                console.log('The data.json returned from the fetch at NYT is', data);
                return data.json();
            })
            .then(function (responseJson) {
                let results = responseJson.results;
                return results;
            })
            .then(function (results) {
                console.log(results);
                console.log(results[0].display_title);
                for (let i = 0; i < results.length; i++) {
                    let title = (results[i].display_title).replace(/ /g, "+");
                    urlMap.push(`${BASE_URL_OMDB}t=${title}${API_KEY_OMDB}`);
                }
                console.log(urlMap);
                return urlMap;

            })
            .then(function (urlMap) {
                Promise.all(urlMap.map(u => fetch(u)))
                    .then(responses =>
                        Promise.all(responses.map(res => res.json()))
                    ).then(texts => {
                        const movieEl = document.getElementById('flex-container');
                        movieEl.innerHTML
                            = `<div class = "flex-container"> 
                        <div class = "card"> <a href="/selected/${texts[0].Title}"> <img class="dogimage" src="${texts[0].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[0].Title} </h3>  <h5> ${texts[0].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[1].Title}"> <img class="dogimage" src="${texts[1].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[1].Title} </h3>  <h5> ${texts[1].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[2].Title}"> <img class="dogimage" src="${texts[2].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[2].Title} </h3>  <h5> ${texts[2].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[3].Title}"> <img class="dogimage" src="${texts[3].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[3].Title} </h3>  <h5> ${texts[3].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[4].Title}"> <img class="dogimage" src="${texts[4].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[4].Title} </h3>  <h5> ${texts[4].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[5].Title}"> <img class="dogimage" src="${texts[5].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[5].Title} </h3>  <h5> ${texts[5].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[6].Title}"> <img class="dogimage" src="${texts[6].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[6].Title} </h3>  <h5> ${texts[6].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[7].Title}"> <img class="dogimage" src="${texts[7].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[7].Title} </h3>  <h5> ${texts[7].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[8].Title}"> <img class="dogimage" src="${texts[8].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[8].Title} </h3>  <h5> ${texts[8].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[9].Title}"> <img class="dogimage" src="${texts[9].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[9].Title} </h3>  <h5> ${texts[9].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[10].Title}"> <img class="dogimage" src="${texts[10].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[10].Title} </h3>  <h5> ${texts[10].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[11].Title}"> <img class="dogimage" src="${texts[11].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[11].Title} </h3>  <h5> ${texts[11].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[12].Title}"> <img class="dogimage" src="${texts[12].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[12].Title} </h3>  <h5> ${texts[12].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[13].Title}"> <img class="dogimage" src="${texts[13].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[13].Title} </h3>  <h5> ${texts[13].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[14].Title}"> <img class="dogimage" src="${texts[14].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[14].Title} </h3>  <h5> ${texts[14].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[15].Title}"> <img class="dogimage" src="${texts[15].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[15].Title} </h3>  <h5> ${texts[15].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[16].Title}"> <img class="dogimage" src="${texts[16].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[16].Title} </h3>  <h5> ${texts[16].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[17].Title}"> <img class="dogimage" src="${texts[17].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[17].Title} </h3>  <h5> ${texts[17].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[18].Title}"> <img class="dogimage" src="${texts[18].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[18].Title} </h3>  <h5> ${texts[18].Plot} </h5></div> </div>
                        <div class = "card"> <a href="/selected/${texts[19].Title}"> <img class="dogimage" src="${texts[19].Poster}"> </a> <div class = "container"> <h3 class = "h3-title"> ${texts[19].Title} </h3>  <h5> ${texts[19].Plot} </h5></div> </div>
                        </div>`


                    })

            })

    }, 
    [searchTerm,
    ]);

    return (

        <div className="Item-box">
            <h1>Home Page!</h1>
            <label for="reviewers">Choose a reviewer: </label>
            <select id="reviewers" name="reviewers" width="50%" value={searchTerm} onChange={handleChange}>
                <option value="A.O. Scott">A.O. Scott</option>
                <option value="Manohla Dargis">Manohla Dargis</option>
                <option value="Stephen Holden">Stephen Holden</option>
                <option value="Jafar Panahi">Jafar Panahi</option>
            </select>
                <div id="flex-container">
                </div>
        </div>
    )
}