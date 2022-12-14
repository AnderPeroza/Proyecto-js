const init = async ()=>{
    const userInformation1 = document.getElementById("user-information1")
    



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

    const imgPerfil = document.getElementById("img-perfil")

    imgPerfil.innerHTML = `
        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://interconcepto.com/wp-content/uploads/2020/05/icono-usuario-cliente-interconcepto-azul.png"><span class="font-weight-bold">${data.data.firstName}</span><span class="text-black-50">${data.data.email}</span><span> </span></div>
    `
    
    userInformation1.innerHTML = `
        <div class="col-md-12"><h4 class="h4s">Nombre: ${data.data.firstName} </h4>
        <div class="col-md-12"><h4 class="h4s">Apellido: ${data.data.lastName}</h4>
        <div class="col-md-12"><h4 class="h4s">Cedula: ${data.data.id}</h4>
        <div class="col-md-12"><h4 class="h4s">Direccion: ${data.data.address}</h4>
        <div class="col-md-12"><h4 class="h4s">Cumpleaños: ${data.data.birthday}</h4>
        <div class="col-md-12"><h4 class="h4s">Correo: ${data.data.email}</h4>
    `
    if(!localStorage.getItem("token")){
        window.location.href = "index-login.html"
    }

}

const editPerfil = document.getElementById("button-edit")
editPerfil.addEventListener("click",()=>{
    window.location.href = "index-perfil-edit.html"
})
const cerrarSesion = document.getElementById("sign-out")

cerrarSesion.addEventListener("click",()=>{
    
    Swal.fire({
        title: 'Estas seguro?',
        text: "Se Cerrara la sesion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Cerrar'
      }).then(async (result) => {
        if (result.isConfirmed) {
           
            localStorage.removeItem("token")


            window.location.href = "index.html"
        }
    })
    
})
const editPassword = document.getElementById("edit-password")

editPassword.addEventListener("click",()=>{
    window.location.href = "index-edit-password.html"
})
const historial = document.getElementById("historial")

historial.addEventListener("click", ()=>{
    location.href = "index-historial-compras.html"
})
init()