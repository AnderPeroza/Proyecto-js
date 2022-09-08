const init = async ()=>{
    const userInformation1 = document.getElementById("user-information1")
    



    const token = localStorage.getItem("token")
    const response = await fetch('https://vg-cine-server.herokuapp.com/ticket', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    console.log(data)

    for (let index = 0; index < data.data.length; index++) {
        
        userInformation1.innerHTML += `
        <div class="col-md-12"><h4 class="h4s">Cantidad de Boletos: ${data.data[index].ticketCount}</h4>
        <div class="col-md-12"><h4 class="h4s">Metodo de Pago: ${data.data[index].paymentMethod}</h4>
        <div class="col-md-12"><h4 class="h4s">Cedula:  ${data.data[index].id}</h4>
        <div class="col-md-12"><h4 class="h4s">Numero de Ref:  ${data.data[index].referenceNumber}</h4>
        <div class="col-md-12"><h4 class="h4s">Titulo: ${data.data[index].movieTitle}</h4>
        <hr>
        `
    }
    
    
     


}
init()