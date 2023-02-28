function fibonacci(numero){
    if(numero < 2){
        return numero;
    }
    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

console.log(fibonacci(23));