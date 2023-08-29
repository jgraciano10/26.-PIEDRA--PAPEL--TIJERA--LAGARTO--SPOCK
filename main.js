let juego = [["piedra", "lagarto"], ["spock", "piedra"], ["papel", "spock"]]

function examinar (array){
    let contador = []
    for(let i =0; i<array.length; i++){
        if(array[i][0] === array[i][1]){
            contador.push("Tie")
        }else if(array[i][0] === "piedra" || array[i][1] === "piedra"){
            if(array[i][0] === "piedra"){
                if(array[i][1]==="papel"){
                    contador.push("player 2")
                }else if (array[i][1]==="spock"){
                    contador.push("player 2")
                }else if(array[i][1]==="tijera"){
                    contador.push("player 1")
                }else{
                    contador.push("player 1")
                }
            }else if(array[i][1] === "piedra"){
                if(array[i][0]==="papel"){
                    contador.push("player 1")
                }else if (array[i][0]==="spock"){
                    contador.push("player 1")
                }else if(array[i][0]==="tijera"){
                    contador.push("player 2")
                }else{
                    contador.push("player 2")
                }
            }
        }else if (array[i][0] === "papel" || array[i][1] === "papel"){
            if(array[i][0] === "papel"){
                if(array[i][1]==="tijera"){
                    contador.push("player 2")
                }else if(array[i][1]==="lagarto"){
                    contador.push("player 2")
                }else {
                    contador.push("player 1")
                }
            }else if(array[i][1] === "papel"){
                if(array[i][0]==="tijera"){
                    contador.push("player 1")
                }else if(array[i][0]==="lagarto"){
                    contador.push("player 1")
                }else {
                    contador.push("player 2")
                }
            }
        }else if(array[i][0] === "tijera" || array[i][1] === "tijera"){
            if(array[i][0] === "tijera"){
                if(array[i][1]==="lagarto"){
                    contador.push("player 1")
                }else{
                    contador.push("player 2")
                }
            }else if(array[i][1] === "tijera"){
                if(array[i][0]==="lagarto"){
                    contador.push("player 2")
                }else{
                    contador.push("player 1")
               }     
            }
        }else if(array[i][0] === "lagarto" || array[i][1] === "lagarto"){
            if (array[i][0] === "lagarto"){
                if(array[i][1]==="spock"){
                    contador.push("player 1")
                }

            }else{
                contador.push("player 2")
            } 
        }       
    }
    return contador
}



let play = document.getElementById("enviar")
play.addEventListener("click", ()=>{
    let player1 = ""
    let player2 =""
    let almacenamiento= []
    let almacenamientofinal =[]
    if(document.getElementById("piedra").checked){
        player1 = document.getElementById("piedra").value
    }else if(document.getElementById("papel").checked){
        player1 = document.getElementById("papel").value
    }else if(document.getElementById("tijera").checked){
        player1 = document.getElementById("tijera").value
    }else if(document.getElementById("lagarto").checked){
        player1 = document.getElementById("lagarto").value
    }else if(document.getElementById("spock").checked){
        player1 = document.getElementById("spock").value
    }

    if(document.getElementById("piedra1").checked){
        player2 = document.getElementById("piedra1").value
    }else if(document.getElementById("papel1").checked){
        player2 = document.getElementById("papel1").value
    }else if(document.getElementById("tijera1").checked){
        player2 = document.getElementById("tijera1").value
    }else if(document.getElementById("lagarto1").checked){
        player2 = document.getElementById("lagarto1").value
    }else if(document.getElementById("spock1").checked){
        player2 = document.getElementById("spock1").value
    }
    almacenamiento.push(player1.toString())
    almacenamiento.push(player2.toString())
    almacenamientofinal.push(almacenamiento)
    
    let result = examinar(almacenamientofinal)[0]
    console.log(result)

    if (result==="player 1"){
        document.getElementById("marcador1").innerHTML = `${parseInt(document.getElementById("marcador1").innerHTML)+1}`
    }else if (result==="player 2"){
        document.getElementById("marcador2").innerHTML = `${parseInt(document.getElementById("marcador2").innerHTML)+1}`
    }


})

let final = document.getElementById("gameover")
final.addEventListener("click", ()=>{
    let marcador1 = parseInt(document.getElementById("marcador1").innerHTML)
    let marcador2 = parseInt(document.getElementById("marcador2").innerHTML)
    if( marcador1 > marcador2){
        document.getElementById("marcador1").innerHTML = "0"
        document.getElementById("marcador2").innerHTML = "0"
        alert("El ganador es el player 1")
        
    }else if(marcador1 < marcador2){
        document.getElementById("marcador1").innerHTML = "0"
        document.getElementById("marcador2").innerHTML = "0"
        alert("El ganador es el player 2")
    }else{
        document.getElementById("marcador1").innerHTML = "0"
        document.getElementById("marcador2").innerHTML = "0"
        alert("Es un empate")
    }
})