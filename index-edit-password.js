
const editPassword = document.getElementById("edit-password")
editPassword.addEventListener("click", async()=>{
    const newPassword = document.getElementById("new-password")
    const confirmPassword = document.getElementById("confirm-password")
    
    
    if(newPassword.value !== "" && confirmPassword.value !== ""){
        const editPassword = {
            "password" : newPassword.value,
            "confirmPassword" : confirmPassword.value
        }
        
        if(newPassword.value === confirmPassword.value){


            Swal.fire({
                title: 'Estas seguro?',
                text: "Se realizaran cambios a la contraseña",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Cambiar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                   
                    const token = localStorage.getItem("token")
                    const response = await fetch('https://vg-cine-server.herokuapp.com/change-password', {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Bearer ${token}`
                            },
                            body : JSON.stringify(editPassword)
        
                    })
                    
                    
                    
                    if(response.status === 200){
                        Swal.fire(
                            'Modificado con exito',
                            'su perfil fue modificado satisfactoriamente!.',
                            'success'
                        )
                        setTimeout(() => { 
                            window.location.href = "index-perfil.html"
                         }, 1500)
                        /*  */
                    }
                   
                }
            })


            
        }else{
            Swal.fire(
                'Las contraseñas no coinciden',
                'Vuelva a interlo',
                'error'
            )
            newPassword.value = ""
            confirmPassword.value = "" 
        }
        
        
        const data = await response.json()
        console.log(data)
    }else{
        Swal.fire(
            'Campos Vacios',
            'Debe llenar todos los campos requeridos!',
            'error'
        ) 
    }
    
})