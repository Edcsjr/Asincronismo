
// contruir promesa

const promise= new Promise(function(resolve,reject){
    resolve('hey !')

});

const cows =9;

const countCows = new Promise (function(resolve,reject){
    if(cows > 10){
        resolve(`Tenemos ${cows} vacas necesarias`)
    }else{
        reject("there is no cows on the farm")
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=> {
    console.log(error);
}).finally(()=> console.log('finally'));