async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos",{
    method:"GET",
        headers:{
        "Content-type":"application/json",
        "Permissions-Policy": "geolocation=(self `http://localhost:3001/productos`)"
        }
});

const conexionConvertida = await conexion.json();
console.log(conexion);
console.log(conexionConvertida);
return conexionConvertida

}

async function crearProducto(nombre,precio,imagen){
    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type":"'application/json; charset=utf-8'"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:precio,
        imagen:imagen
    })
    })

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}



export const conexionAPI={
    listarProductos,crearProducto
    
}
