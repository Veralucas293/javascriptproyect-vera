// const n = prompt ("Choose a number...")

// for (let i = 1; i <=n; i+=1) {
//     document.write('me encanta javascript' + '<br>')
// }
// let usuario = prompt("Ingresa tu nombre");
// let choice = prompt("Elige una marca:" + " " + "A)Alfa Romeo" + " " + "B)BMW" + " " + "C)Mazda")

// function saludar(nombre) {
// 	document.write(nombre + "!");
// }

// saludar(usuario);

// function chooseBrand(eleccion) {

//     if (choice === 'Alfa Romeo') {
//         document.write("<br>" + "Bienvenido fanático italiano, realmente los aprecias o sólo los sigues por Nicky Lauda?")
//     } else if (choice === 'BMW') {
//         document.write("<br>" + "Conocedor Alemán, aunque todos sabemos que fue el Most Wanted del 2005 el que te impuso el gusto :D")
//     } else if (choice === 'Mazda'){
//         document.write("<br>" + "No se si eres muy viejo y por eso optas por el 787B o si eres un joven muy interesado en el RX7")
//     }
// }

// chooseBrand(choice)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

// for (let i= 0; i < numeros.length; i++) {
//     alert(numeros[i]);
// }


//  const listaAutos = [];
//  let   cantidad   = 5;

//  do{
//     let entrada = prompt("Ingresar autos");
//     listaAutos.push(entrada);
//     document.write(entrada + "<br>");
//  }while(listaAutos.length != cantidad)


// const auto1 = { id: 1, marca: "Ferrari", modelo: "F12 Berlinetta", precio: 1235879}
// const auto2 = {id: 2, marca: "Mercedes", modelo: "SL65 AMG", precio: 65285}
// const auto3 = {id: 3, marca: "Lancia", modelo: "Delta HF Integrale", precio: 45893}
// const auto4 = {id: 4, marca: "Fiat", modelo: "Abarth 595", precio: 85356}
// const auto5 = {id: 5, marca: "Toyota", modelo: "Supra MK4", precio: 80000}
// const auto6 = {id: 6, marca: "Honda", modelo: "Civic EK9", precio: 38796}
// const auto7 = {id: 7, marca: "Ford", modelo: "Mustang '65 Fastback", precio: 67582}
// const auto8 = {id: 8, marca: "Audi", modelo: "A6 TSFI", precio: 135895}
// const auto9 = {id: 9, marca: "Renault", modelo: "Clio Williams", precio: 235000}

// const autosDisp = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9]
// const garage1 = [auto1, auto2, auto3]
// const garage2 = [auto4, auto5, auto6]
// const garage3 = [auto7, auto8, auto9]
// const garagePersonalizado = []
// let cantidad = 3;

// let garageDeseado = prompt("Eliges el garage número 1, 2, 3 o personalizado?")

// if (garageDeseado === '1'){
//     document.write("Mi garage deseado estaria conformado por estos autos:" + "<br>");
//     for (const auto of garage1){
//         document.write(auto.marca + " " + auto.modelo + "<br>");
//     }
//     const t = garage1.reduce((acc, el) => acc + el.precio, 0);
//     document.write(`El valor de este garage se eleva a $${t}`);
// } else if (garageDeseado === '2'){
//     document.write("Mi garage deseado estaria conformado por estos autos:" + "<br>");
//     for (const auto of garage2){
//     document.write(auto.marca + " " + auto.modelo + "<br>");
// }   
//     const t = garage2.reduce((acc, el) => acc + el.precio, 0);
//     document.write(`El valor de este garage se eleva a $${t}`); 
// }else if (garageDeseado === '3'){ 
//     document.write("Mi garage deseado estaria conformado por estos autos:" + "<br>");
//     for (const auto of garage3){
//         document.write(auto.marca + " " + auto.modelo + "<br>");
//     }
//     const t = garage3.reduce((acc, el) => acc + el.precio, 0);
//     document.write(`El valor de este garage se eleva a $${t}`);
// } else if (garageDeseado === 'personalizado'){
//     document.write("Personalmente optaría más por estas otras opciones:" + "<br>")
//     do{
//     let entrada = prompt("qué autos deseas?");
//     garagePersonalizado.push(entrada);
//     document.write(entrada + "<br>");
//     }while(garagePersonalizado.length != cantidad )
// } else if (garageDeseado === '4'){
//     document.write("No hiciste una selección válida, por favor recargar el navegador!")
// } else if (garageDeseado === '5'){
//     document.write("No hiciste una selección válida, por favor recargar el navegador!")
// } else if (garageDeseado === ''){
//     document.write("No hiciste una selección válida, por favor recargar el navegador!")
// }
    
// let marcaAuto = document.getElementById("marca");
// let modelAuto = document.getElementById("modelo");
// let colorAuto = document.getElementById("color");
// let recap = document.getElementById("salida");
// let list = document.getElementById("lista")



// const auto1 = { id: 1, marca: "Ferrari", modelo: "F12 Berlinetta", cv: "742 hp"}
// const auto2 = {id: 2, marca: "Mercedes", modelo: "SL65 AMG", cv: "670 hp"}
// const auto3 = {id: 3, marca: "Lancia", modelo: "Delta HF Integrale", cv: "212 hp"}
// const auto4 = {id: 4, marca: "Fiat", modelo: "Abarth 595", cv: "165 hp"}
// const auto5 = {id: 5, marca: "Toyota", modelo: "Supra MK4", cv: "350 hp"}
// const auto6 = {id: 6, marca: "Honda", modelo: "Civic EK9", cv: "182 hp"}
// const auto7 = {id: 7, marca: "Ford", modelo: "Mustang '65 Fastback", cv: "306 hp"}
// const auto8 = {id: 8, marca: "Audi", modelo: "A6 TSFI", cv: "333 hp"}
// const auto9 = {id: 9, marca: "Renault", modelo: "Clio Williams", cv: "150 hp"}

// const autosDisp = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9]

// function capturar (){
//     recap.innerHTML = "<h2> Mi auto de ensueño es: </h2>"+"<br>"+marcaAuto.value+" "+modelAuto.value+" de color "+colorAuto.value+"<br>";
//     let title = document.createElement("h3");
//     title.innerHTML = "Una lista de ejemplo para ayudar con el test:";
//     list.appendChild(title)
//     for (const autos of autosDisp){
//         let li = document.createElement("li");
//         li.innerHTML = autos.marca+" "+autos.modelo;
//         list.appendChild(li);
    
//     }
// }

// let saludo = document.getElementById("saludo");
// function greet (){
//     let greet = document.createElement("h4");
//     greet.innerHTML = "Gracias por participar";
//     saludo.appendChild(greet);}


// saludo.addEventListener("click", greet);

const lista1 = document.querySelector('#listado')

let btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    fetch('data.json')
        .then( (res) => res.json())
        .then( (data) => {
    
            data.forEach((producto) => {
                const li = document.createElement('li')
                li.innerHTML = `
                    <h4>${producto.marca}</h4>
                    <p>${producto.modelo}</p>
                    <p>Cv: ${producto.cv}</p>
                    <hr/>
                `
       
                lista1.append(li)
            })
        })

})

const listaElegida = document.getElementById("lista-elegida");
const formulario = document.getElementById("formulario");

let eleccion = [];

formulario.addEventListener('submit', agregarCorredor);
document.addEventListener('DOMContentLoaded', ()=>{
    eleccion = JSON.parse( localStorage.getItem('eleccion') ) || []
    renderHTML()
})

let sumatoria = JSON.parse(localStorage.getItem('eleccion'))


function agregarCorredor(evt){
    evt.preventDefault()
    
    

    const choice = document.getElementById("choice").value
    

    if(choice === ''){
        
        mostrarError("No admite vacios");
        return;
    }
    
    const choiceObj = {
        id: Date.now(),
        texto: choice
    }

    
    eleccion.push(choiceObj)
    

    
    renderHTML()

    formulario.reset()

}


function renderHTML(){
    limpiarHTML();
      if(eleccion.length>0){
      
        for(let opcion of eleccion){
          
            const li = document.createElement('li');
            li.textContent = opcion.texto;

            listaElegida.appendChild(li);
        }
    }
    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('eleccion', JSON.stringify(eleccion));
}

function limpiarHTML(){
    while(listaElegida.firstChild){
        listaElegida.removeChild(listaElegida.firstChild)
    }
}




function mostrarError(msg){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = msg;
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError)
}


let test = document.getElementById("test");
function test1(){
    swal({
        title: "Estas seguro?",
        text: "Estas a punto de reiniciar la lista completa, aún deseas hacerlo?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("listo! la lista se ha reiniciado!", {
            icon: "success",
          });
          localStorage.clear();
          location.reload();
        } else {
          swal("Aquí no ha sucedido nada!");
        }
      });
}

test.addEventListener("click", test1);