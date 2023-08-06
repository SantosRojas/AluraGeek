export const listarProducts = async () => {
    const response = await fetch("http://localhost:3000/productos")
    return await response.json()
}


export const addProduct = (nameProducto,catgProducto,precioProducto,urlProducto,descProducto) =>{
    return fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({id:uuid.v4(),name:nameProducto,category:catgProducto,price:precioProducto,url:urlProducto,description:descProducto})
    })
}
// function connection(url){
//     const http = new XMLHttpRequest()
//     http.open("GET",url)
//     http.send()
//     http.onload =() => {
//         const data = http.response
//         console.log(JSON.parse(data))
//     }
// }

export const removeProduct = (id) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"DELETE"
    })
}

export const detalleProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/productos/${id}`)
    return await response.json()
}

export const editProduct = (id,nameProducto,catgProducto,precioProducto,urlProducto,descProducto) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({id:id,name:nameProducto,category:catgProducto,price:precioProducto,url:urlProducto,description:descProducto})
    })
}