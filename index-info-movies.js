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
    const btnComprar = document.getElementById("btn-comprar")
    if(!localStorage.getItem('token')){
        btnComprar.style.display = "none"
    }

    
}
init()

const btnComprar = document.getElementById("btn-comprar")

btnComprar.addEventListener("click", async ()=>{

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const response = await fetch(`https://vg-cine-server.herokuapp.com/movie-detail/${params.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await response.json()
    const { value: formValues } = await Swal.fire({
        title: 'Compra',
        html:`
            <label for="">Cantidad Entradas</label>
            <input id="ticket-cant" class="swal2-input"></input>
            
            <label for="">Metodo de Pago</label>
            <input id="pago" class="swal2-input"></input>
            <br>
            <label for="">Cedula</label>
            <br>
            <input id="cedula" class="swal2-input"> </input>
            
            <label for="">Numero de telef</label>
            <input id="numero-ref" class="swal2-input"> </input>
        
        `,
          
        focusConfirm: false,
        preConfirm:  async () => {
            return {
                ticketCount: document.getElementById('ticket-cant').value,
                paymentMethod : document.getElementById('pago').value,
                id : document.getElementById('cedula').value,
                referenceNumber : document.getElementById('numero-ref').value,
                movieTitle : data.data.title

            }
        //   return [
        //     document.getElementById('swal-input1').value,
        //     document.getElementById('swal-input2').value
        //   ]
        }
    })
      
    if (formValues) {
        const token =  localStorage.getItem('token')
        
        const response = await fetch(`https://vg-cine-server.herokuapp.com/ticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body:  JSON.stringify(formValues)
        })
        if(response.status === 200){
            console.log("listo Ppi")
        }
    }



})