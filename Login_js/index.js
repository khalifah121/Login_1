const p = document.querySelector("p")
const id = document.querySelector(".id")
const passcode = document.querySelector(".passcode")
const btn = document.querySelector(".btn")
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")




btn.addEventListener("click",function(f){
    f.preventDefault()

    if(!id.value){
        error1.textContent="Enter a valid Mail"
    }
    else if(id.value){
        error1.textContent=""
    }
})
btn.addEventListener("click",function(f){
    f.preventDefault()
    if(!passcode.value){
        error2.textContent="Enter a valid Password"
    }
    else if(passcode.value){
        error2.textContent=""
    }

})