

alert("Categorias: 1) Sin Alcohol - 2) Bajo En Alcohol - 3) Alto en Alcohol")

let productos = [
    {id:1, nombre: "Saison", precio:"S/12", categoria: "Bajo En Alcohol", alcohol: "5%"},
    {id:2, nombre: "Maracuyá", precio:"S/15", categoria: "Sin Alcohol", alcohol: "0%"},
    {id:3, nombre: "Golden Ale", precio:"S/17", categoria: "Alto en Alcohol", alcohol: "12%"},
];

let categoria = prompt("Ingrese la categoría que desea buscar")
let filtrado = productos.filter(item => item.categoria === categoria)

filtrado.forEach( (item) => {
    let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: ${item.precio}
    Alcohol: ${item.alcohol}
    `;
    alert(mensaje);
}
)