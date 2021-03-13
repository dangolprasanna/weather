const api= {
    key: "e71f1080f788f47b021779cad8157ad6",
    baseurl: "https://api.openweathermap.org/data/2.5"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) {
        //getResults(searchbox.value);

        console.log(searchbox.value);
    }
}


