import fetch from "node-fetch"; // instalar fetch (npm install node-fetch)
const API='https://api.escuelajs.co/api/v1';

function fetchData(urlApi){

    return fetch(urlApi);
};

// fetchData(`${API}/products`)
// .then(Response=>Response.json())
// .then(products=>{
//     console.log(products);
// })
// .catch(error => console.log(error))

fetchData(`${API}/products`)
.then(response=>response.json())
.then(products =>{
    console.log(products); // mostrar todos los productos
    return fetchData(`${API}/products/${products[0].id}`)
} )

.then(response => response.json())
.then(product=> {
    console.log(product.title); //mostrar el titulo del producto
    console.log(product.price);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name); // mostrar la categoria del producto
    console.log(category.creationAt);
})

.catch(error => console.log(error))
.finally(()=> console.log('finally'));