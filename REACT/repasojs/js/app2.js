export const actividad = {
                   a:"pasear al perro",
                   b:"comer",
                   c:"salir"
                  };

export const saludar = (nombre, dice) => {
    return `Hola soy ${nombre} y te saludo diciendo ${dice}`;
}

export class Auto{
    constructor(nombre, color){
         this.nombre = nombre;
         this.color = color;
    }
    andar(){
        return "Estoy en movimiento por la ruta con mi auto " + this.nombre + " " + this.color;
    }
}

