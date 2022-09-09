const emailLogin = document.getElementById("emailLogin")  
const passwordLogin = document.getElementById("passwordLogin")

const buttonLogin = document.getElementById("buttonLogin")

buttonLogin.addEventListener("click", async () =>{
    const emailLogin = document.getElementById("emailLogin")  
    const passwordLogin = document.getElementById("passwordLogin")

    const buttonLogin = document.getElementById("buttonLogin")
    if(emailLogin.value !== "" && passwordLogin.value !== ""){
        const userLogin = {
            "email": emailLogin.value,
            "password":passwordLogin.value
        }
        const response = await fetch('https://vg-cine-server.herokuapp.com/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)

        })

        const data = await response.json()
       
        if(response.status===200){
            const jwt = data.token

            localStorage.setItem('token',jwt)
            
            window.location.href = '/'
        }

    }else{
        console.log("hola")
        Swal.fire(
            'Campos Vacios',
            'Debe llenar todos los campos requeridos!',
            'error'
        )
    }
})

const init = ()=>{
    emailLogin.value = ""
    passwordLogin.value = ""
    if(localStorage.getItem("token")){
        window.location.href = "/"
    }
}

init() 