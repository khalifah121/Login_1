const mail = document.querySelector(".mail")
const error1 = document.querySelector(".error1")
const user_id = document.querySelector(".User_id")
const error2 = document.querySelector(".error2")
const passcode = document.querySelector(".passcode")
const error3 = document.querySelector(".error3")
const c_passcode = document.querySelector(".c_passcode")
const error4 = document.querySelector(".error4")
const btn = document.querySelector(".btn")
const h3 = document.querySelector("h3")
const container = document.querySelector(".container")

btn.addEventListener("click",function(f){
    f.preventDefault()

    if(!mail.value){
        error1.textContent="Required"
    }
    else if(mail.value){
        error1.textContent=""
    }
})
btn.addEventListener("click",function(f){
    f.preventDefault()
    if(!user_id.value){
        error2.textContent="Required"
    }
    else if(user_id.value){
        error2.textContent=""
    }

})
btn.addEventListener("click",function(f){
    f.preventDefault()

    if(!passcode.value){
        error3.textContent="Must contain 8 characters"
    }
    else if(passcode.value){
        error3.textContent=""
    }

    })
    
    btn.addEventListener("click",function(f){
    f.preventDefault()
    if(!c_passcode.value){
        error4.textContent="Confirm Password"
    }
    else if(c_passcode.value){
        error4.textContent=""
    }

})

// btn.addEventListener("click",(f)=>{
//     f.preventDefault()

//     if(mail.value & user_id.value & passcode.value & c_passcode.value ){
//         h3.textContent="Form succesfully submitted"
//     }
//     else if(!mail.value & !user_id.value & !passcode.value & !c_passcode.value)
//     {
//         h3.textContent="form Not filled"
//     }

// })