//Creamos la base de datos con un objeto
const productos = [
    { nombre: "Age of Empires 4", precio: 444, id: "1", img: "../img/1.jpg", idCat: "4" },
    { nombre: "Age of Empires 2", precio: 111, id: "2", img: "../img/2.jpg", idCat: "4" },
    { nombre: "Civilization VI", precio: 304, id: "3", img: "../img/3.jpg", idCat: "4" },
    { nombre: "Crusader Kings 3", precio: 250, id: "4", img: "../img/4.jpg", idCat: "4" },
    { nombre: "Jurassic World E2", precio: 250, id: "5", img: "../img/5.jpg", idCat: "2" },
    { nombre: "Howards Legacy", precio: 250, id: "6", img: "../img/6.jpg", idCat: "2" },
    { nombre: "RimWorld", precio: 250, id: "7", img: "../img/7.jpg", idCat: "2" },
    { nombre: "Planet Zoo", precio: 250, id: "8", img: "../img/8.jpg", idCat: "4" },
    { nombre: "Elden Ring", precio: 250, id: "9", img: "../img/9.jpg", idCat: "2" },
    { nombre: "Dota 2", precio: 250, id: "10", img: "../img/010.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Regresa el producto

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//regresa toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}