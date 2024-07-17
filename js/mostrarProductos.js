import { conexionAPI } from "./conexionApi.js";

const lista = document.querySelector("[data-lista]")

function crearProducto(nombre,precio,imagen){
    const producto = document.createElement("li");
    producto.className = "producto_item";
    producto.innerHTML=`  
       <div    class="imagen_producto">
            <img src="${imagen}" alt="imagen Producto">
        </div>
        
        <div class="descripcion-producto">
            
            <h3>${nombre}</h3>
            <p>${precio}</p>
        </div>
    `
    return producto;
}


async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos()
        listaAPI.forEach(productos => lista.appendChild(crearProducto(productos.nombre, productos.precio, productos.imagen)));
    }catch{
        lista.innerHTML=`<h2> Ups! Error en la conexion</h2>`
    }
}

listarProductos();