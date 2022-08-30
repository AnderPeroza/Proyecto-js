const init= async()=>{

    const ingresar = document.getElementById("nav-ingresar")

    if(localStorage.getItem('token')){
        ingresar.innerHTML =`
            <a class="nav-link active" aria-current="page" href="index-perfil.html">Perfil</a>
        `
    }

    const response = await fetch('https://vg-cine-server.herokuapp.com/movies', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    const movies = document.getElementById("movies")
    
    
    for(let i = 0 ; i<data.data.length; i++){
        
        movies.innerHTML+=`
            <div >
                <a href="info-movies.html"><img src="https://image.tmdb.org/t/p/w500${data.data[i].poster_path}" alt=""></a>
            </div>
           
         `
    }

    

    
}
init()