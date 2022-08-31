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

    const imgPerfil = document.getElementById("img-perfil")

    imgPerfil.innerHTML = `
        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://interconcepto.com/wp-content/uploads/2020/05/icono-usuario-cliente-interconcepto-azul.png"><span class="font-weight-bold">${data.data.firstName}</span><span class="text-black-50">${data.data.email}</span><span> </span></div>
    `
    userInformation1.innerHTML =`
        <div class="col-md-6"><label class="labels">Nombre</label><input id="nombre" type="text" class="form-control" placeholder="first name" value="${data.data.firstName}"></div>
        <div class="col-md-6"><label class="labels">Apellido</label><input id="apellido" type="text" class="form-control" value="${data.data.lastName}" placeholder="surname"></div> 
    `
    userInformation2.innerHTML = `
        <div class="col-md-12"><label class="labels">Cedula</label><input id="cedula" type="text" class="form-control" placeholder="enter phone number" value="${data.data.id}"></div>
        <div class="col-md-12"><label class="labels">Direccion</label><input id="direccion" type="text" class="form-control" placeholder="enter address line 1" value="${data.data.address}"></div>
        <div class="col-md-12"><label class="labels">Cumpleaños</label><input id="cumple" type="date" class="form-control" placeholder="enter address line 2" value="${data.data.birthday}"></div>
        
    `
}


const editProfile = document.getElementById("edit-profile")

editProfile.addEventListener("click", async()=>{
    const userFirstName = document.getElementById("nombre")
    const userLastName = document.getElementById("apellido")
    const userId =document.getElementById("cedula")
    const userAddress = document.getElementById("direccion")
    const userBirthday = document.getElementById("cumple")

    const editUser = {
        "firstName" : userFirstName.value,
        "lastName" : userLastName.value,
        "id" : userId.value,
        "address" : userAddress.value,
        "birthday" :userBirthday.value
    }
    const token = localStorage.getItem("token")
    const response = await fetch('https://vg-cine-server.herokuapp.com/edit-profile', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body : JSON.stringify(editUser)

    })

    const data = await response.json()

    console.log(data)


})

init()