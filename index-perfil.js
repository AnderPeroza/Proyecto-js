const init = async ()=>{
    const userInformation1 = document.getElementById("user-information1")
    const userInformation2 = document.getElementById("user-information2")



    const token = localStorage.getItem("token")
    const response = await fetch('https://vg-cine-server.herokuapp.com/profile', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    console.log(data)
    
    userInformation1.innerHTML = `
        <div class="col-md-12"><h4 class="h4s">Nombre: ${data.data.firstName} </h4>
        <div class="col-md-12"><h4 class="h4s">Apellido: ${data.data.lastName}</h4>
        <div class="col-md-12"><h4 class="h4s">Cedula: ${data.data.id}</h4>
        <div class="col-md-12"><h4 class="h4s">Direccion: ${data.data.address}</h4>
        <div class="col-md-12"><h4 class="h4s">Cumpleaños: ${data.data.birthday}</h4>
        <div class="col-md-12"><h4 class="h4s">Correo: ${data.data.email}</h4>
    `


}
init()