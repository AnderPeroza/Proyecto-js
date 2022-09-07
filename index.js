


AOS.init();

const init= async()=>{

    const ingresar = document.getElementById("nav-ingresar")

    if(localStorage.getItem('token')){
        ingresar.innerHTML =`
            <a class="nav-link active" aria-current="page" href="index-perfil.html">Perfil</a>
        `
    }
    if(!window.location.href.includes("index-all-movies.html")){
            const response = await fetch('https://vg-cine-server.herokuapp.com/movies', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        const movies = document.getElementById("movies")
        console.log(data)
        
        for(let i = 0 ; i<data.data.length; i++){
            
            movies.innerHTML+=`
                <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                    <a href="index-info-movies.html?id=${data.data[i].id}"><img  src="https://image.tmdb.org/t/p/w500${data.data[i].poster_path}" alt=""></a>
                </div>
            
            `
        }

        const banner = document.getElementById("banner")
        banner.style.backgroundImage = 'url("https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/A52OT4DFRNCGRDDGJ2LGL7R4J4.jpg")'
        banner.style.height = "85vh"
        banner.style.backgroundPosition = "center"
        banner.style.backgroundSize = "cover"
    }else{
        const response = await fetch('https://vg-cine-server.herokuapp.com/movies?all=true', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        const movies = document.getElementById("movies")
        console.log(data)
        
        for(let i = 0 ; i<data.data.length; i++){
            
            movies.innerHTML+=`
                <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" >
                    <a href="index-info-movies.html?id=${data.data[i].id}"><img  src="https://image.tmdb.org/t/p/w500${data.data[i].poster_path}" alt=""></a>
                </div>
            
            `
        }

        const banner = document.getElementById("banner")
        banner.style.backgroundImage = 'url("https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/A52OT4DFRNCGRDDGJ2LGL7R4J4.jpg")'
        banner.style.height = "85vh"
        banner.style.backgroundPosition = "center"
        banner.style.backgroundSize = "cover"
         
    }   
    console.log(location.href)

   
    
    

    
}
init()