// const n = prompt ("Choose a number...")

// for (let i = 1; i <=n; i+=1) {
//     document.write('me encanta javascript' + '<br>')
// }
let usuario = prompt("Ingresa tu nombre");
let choice = prompt("Elige una marca:" + " " + "A)Alfa Romeo" + " " + "B)BMW" + " " + "C)Mazda")

function saludar(nombre) {
	document.write(nombre + "!");
}

saludar(usuario);

function chooseBrand(eleccion) {

    if (choice === 'Alfa Romeo') {
        document.write("<br>" + "Bienvenido fanático italiano, realmente los aprecias o sólo los sigues por Nicky Lauda?")
    } else if (choice === 'BMW') {
        document.write("<br>" + "Conocedor Alemán, aunque todos sabemos que fue el Most Wanted del 2005 el que te impuso el gusto :D")
    } else if (choice === 'Mazda'){
        document.write("<br>" + "No se si eres muy viejo y por eso optas por el 787B o si eres un joven muy interesado en el RX7")
    }
}

chooseBrand(choice)