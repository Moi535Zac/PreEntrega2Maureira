
// forEach recorreo el array nombre y concatena hola, como estas al nombre del array
const nombre=["Juan", "Pedro","Diego"];

nombre.forEach((el)=>{
    console.log("Hola, Cómo estás? "+el)
}
)



// FIND, busca y devuelve el 1er elemento detro de un array

const producto=[
    {
        nombre: "Tomates",
        precio: 1500,
        vendido: true

    },

    {
        nombre: "Lechuga",
        precio: 500,
        vendido: true

    },

    {
        nombre: "Platano",
        precio: 200,
        vendido: false

    },

    
    {
        nombre: "Ajis",
        precio: 200,
        vendido: false

    }

]
const buscar=producto.find( (el)=>{
    return el.nombre==="Tomates";

})

console.log(buscar)

//Filter, es lo mismo que el find, pero devuelve todos los elementos que cumplen la condición.

const buscarFilter= producto.filter( (el)=>{
    return el.vendido;
}

)

console.log(buscarFilter)


//SOME, verifica si un elemto existe o no (verdadero o falso)

const existe1= producto.some((el)=>{
    return el.nombre==="Tomates"
}
)
console.log(existe1)

const existe2= producto.some((el)=>{
    return el.nombre==="aji"
}
)
console.log(existe2)


//map crea un nuevo array, tomando los elementos de otro array

const productoPrecio= producto.map( (el)=>{
    //return el.nombre;
     return el.precio;
}
)
//Agregamos IVA al precio y retornamos los valores
const productoPrecioIva= producto.map( (el)=>{
    //return el.nombre;
   el.precio = el.precio * 1.19;
    return el.precio;
}

)

console.log(productoPrecio)
console.log(productoPrecioIva)


//reduce, retorna un valor acumulando valores, requiere dos valores, un acumulador y un elemento

const total = producto.reduce( (acumulador, el)=>{
    return acumulador + el.precio;
},0 );

console.log(total)

//sort, Reordena  el array, de acuerdo a mis preferencias

producto.sort( (a,b)=>{
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase())
    {
        return -1;
    }else if(a.nombre.toLowerCase() > b.nombre.toLowerCase())
    {
        return 1;

    }
    return 0;

}

)

console.log(producto)
