const init =async ()=>{

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const movieCaratula = document.getElementById("movie-caratula-container")
    const infoMovie = document.getElementById("info-movie")
    console.log(params.id)



    const response = await fetch(`https://vg-cine-server.herokuapp.com/movie-detail/${params.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()

    console.log(data)

    const background = document.getElementById("movie-banner")
    background.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.data.backdrop_path})`
    background.style.height = "400px"
    background.style.backgroundSize = "cover"

    movieCaratula.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${data.data.poster_path}" alt="">
        <div class="title-container col-md-12">
            <p class="movie-title">
                ${data.data.title}
            </p>
        <div/>
        
    `
    infoMovie.innerHTML = data.data.overview
}
init()