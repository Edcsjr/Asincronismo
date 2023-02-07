function sum(a, b){
    return a+b;
}

function calc(a,b,callback){
    return callback(a,b);
};

console.log(calc(2,2,sum));


// Otro ejemplo callback

setTimeout(function(){
    console.log('Hola javascript')
}, 2000);


function saludo(nombre){

    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 2000, 'Oscar');