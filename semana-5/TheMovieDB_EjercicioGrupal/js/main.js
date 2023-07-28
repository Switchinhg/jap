function getCardHTML(img, title) {
    return `
<div class="card">
    <img src="${IMAGE_URL}${img}" />
    <h3>${title}</h3>
    <a href="${API_URL_SEARCH}${encodeURIComponent(title)}" target="_blank">Ver Más</a>
</div>`;
}

function showMovies(movies) {
    // ## INICIO BLOQUE 4 ##
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let movie of movies) {
        container.innerHTML += getCardHTML(movie.poster_path, movie.title)
    }
    // ## FIN BLOQUE 4 ##
}

async function submitSearchEvent(e) {
    // ## INICIO BLOQUE 2 ##
    e.preventDefault();
    const response = await getMovies(document.getElementById("txtSearch").value);
    if (response.status === "ok") {
        showMovies(response.data.results);
    } else {
        alert("OCURRIÓ UN ERROR");
    }
    // ## FIN BLOQUE 2 ##
}


window.addEventListener("load", function () {
    // ## INICIO BLOQUE 1 ##
    const formSearch = document.getElementById("formSearch");
    formSearch.addEventListener("submit", submitSearchEvent);
    // ## FIN BLOQUE 1 ##
});
