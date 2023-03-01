function fibonacci(numero){
    let n = 3;

    n = (n - 1) + (n - 2);

    console.log(n);
    if(n > numero) {
        return 'não esta'
    }else {
        return 'esta';
    }

    return fibonacci(numero, 2);
    
}


console.log(fibonacci(7));