const API = "https://iskarr.github.io/austindonovan.github.io/api/business.json"

fetch(API).then((response) => response.json()).then((jsObject) => {console.log(jsObject);
})