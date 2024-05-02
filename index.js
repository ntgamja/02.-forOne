btn= document.querySelector("button")
input=document.querySelector("input")
h5=document.querySelector("h5")
container=document.querySelector(".container")
img=document.querySelector("img")

console.log(container)


btn.addEventListener("click",(e)=>{
    console.log(input.value)
    inp=input.value
    if (inp==="원세은"){
        h5.textContent="사랑해 ♥"
        container.style.backgroundImage="url(./onepic.jpg)"
    }else{
        h5.textContent="Login"
        container.style.backgroundImage="none"
    }
})

window.addEventListener("resize",(e)=>{
    width=Number(window.innerWidth)
    height=Number(window.innerHeight)
    if (width>height){
        console.log("w>h")
        container.style.width="35vw"
        container.style.height="35vw"
        container.style.marginTop="5vw"
        h5.style.fontSize="5vw"
        input.style.height="5vw"
        input.style.width="25vw"
        input.style.fontSize="2.5vw"
        btn.style.height="5vw"
        btn.style.width="5vw"
        btn.style.fontSize="2vw"
        }else{
        console.log("h>w")
        container.style.width="70vw"
        container.style.height="70vw"
        container.style.marginTop="30vw"
        h5.style.fontSize="10vw"
        input.style.height="10vw"
        input.style.width="50vw"
        input.style.fontSize="5vw"
        btn.style.height="10vw"
        btn.style.width="10vw"
        btn.style.fontSize="4vw"

    }
})





