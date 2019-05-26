import {actividad, saludar, Auto} from './app2.js';

console.log(actividad.b);
console.log(saludar("Maxi", "sos de terror"))

const autoA = new Auto("BMW", "Negro");
console.log(autoA);
console.log(autoA.andar());

//var name = "jose"
// const name2 = "Axl"
// let name3 = "Gile"
// console.log("Hola " + name3)

//Template Strings

const name="Jose";
const age=36;

console.log(`El nombre es ${name} y tiene ${age} años de edad`)

const miDiv=document.querySelector("#app")

const miTemplateStrings=`
                      <ol>
                         <li>Nombre: ${name}</li>
                         <li>Edad: ${age}</li>
                      </ol>
                      `;

miDiv.innerHTML = miTemplateStrings;



const saludo  = function(){
    console.log("Hello you")
}



saludo();

let destino = country=>`Viajando a ${country} con mi perro`


console.log(destino("Alaska"));

//Object literal
const persona = {
    name:"Shakira",
    age:37,
    profesion:"Cantante"
}

console.log(persona)

//Object constructor
function Persona(name, age, profesion){
      this.name = name;
      this.age = age;
      this.profesion =profesion;
}

const per1 = new Persona("Axl", 45, "cantante")

console.log(per1)

//PROTOTYPE --> Creamos un proto de la Persona que agrega una funcion nueva mostrarDatos
Persona.prototype.mostrarDatos = function(){
    return `El nombre de la persona es ${this.name} con una edad de ${this.age} y su trabajo es ${this.profesion}`
}

console.log(per1.mostrarDatos())

//Forma nueva de crear objetos literal
const nameproduct = "MacBook pro 13"
const price = 3000
const ageproduct = 2018

const product = {nameproduct, price, ageproduct, verDatos: function(){return `El nombre es ${nameproduct}, con un precio de ${price} y el año de produccion es ${ageproduct}`} } //Se simplifica al definir el objeto literal

console.log(product)
console.log(product.verDatos())

//forEach

const carrito = ["mac", "dell", "toshiba", "sony"]

console.log(carrito)

carrito.forEach(item => {console.log(item)})

carrito.map(item => {return "El producto es  " + item
} );

//Object Keys
const vuelo = {
    fecha:"12/01/2019",
    destino:"Madrid",
    avion:"fly bondy"
}

console.log(Object.keys(vuelo))

//Spread operator -> unir arreglos y copiar  "..."
const edades = [2,3,3,5,1,64]
const nombres = ["juan", "guille", "ivana"]

//let arreglosUnidos = edades.concat(nombres);

let arreglosUnidos = [...edades,...nombres];

console.log(arreglosUnidos);

//Hacer una copia del arreglo

let copyArray = [...nombres]
console.log(copyArray)


//PROMISE
const aplicarDescuento = new Promise((resolve, reject) => {

    setTimeout(() => {
        let Desc = true;
        if(Desc){
            resolve("Descuento aplicado!")
        }else{
            reject("No tiene descuento!")
        }
    }, 4000)

})
    
aplicarDescuento.then((resultado) =>{
    console.log(resultado);
}).catch((error) =>{
    console.log("Ocurrio un error: " + error )
})


//Promise con llamado a api con ajax
const usersapi = new Promise((resolve, reject) => {

   const api = `https://jsonplaceholder.typicode.com/users`;  //llamado ajax
    
   const xhr = new XMLHttpRequest();

   xhr.open('GET', api, true);
   
   xhr.onload = () => { 
       if(xhr.status === 200){
           resolve(JSON.parse(xhr.responseText));
       }else{
           reject(Error(xhr.statusText));
      }
   } 
   xhr.send();

})


usersapi.then(usuarios => {
    console.log(usuarios);
    usuarios.forEach(user => {
        console.log(`Nombre de usuario: ${user.name}, con el id: ${user.id}`); 
        addDiv(usuarios);  
 })
})

function addDiv(usuarios){
   let miTemplateStringsUsers = '';
   usuarios.forEach(user => {
     miTemplateStringsUsers +=`<li>Nombre de usuario: ${user.name}, con el id: ${user.id}</li>`;    
  })
   const miDivUsers=document.querySelector("#users")
   miDivUsers.innerHTML = miTemplateStringsUsers; 
}


//CLASS

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `El nombre es ${this.nombre} y tiene una prioriddad ${this.prioridad} por ahora`
    } 
}

let tarea1 = new Tarea("Comer", "alta");
console.log(tarea1.mostrar());


//CLASS HERENCIA

class TareaMejorada extends Tarea{
    constructor(nombre, prioridad, costo){
       super(nombre, prioridad);
       this.costo = costo;
    }
    mostrar(){
        return `El nombre es ${this.nombre} y tiene una prioriddad ${this.prioridad} por ahora y el costo es ${this.costo}`
    } 
}

let tarea2 = new TareaMejorada("dormir", "muy alta", "sin costo");

console.log(tarea2.mostrar());