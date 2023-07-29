export const listarProducts = async () => {
    const response = await fetch("http://localhost:3000/productos")
    return await response.json()
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
