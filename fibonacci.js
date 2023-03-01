function fibonacci(numero){
    let n = 3;
    let ultimoNum = 2;
    let numerosFibonacci = [0,1,2,3];
    for(let i = 0; i < numero; i++){
        let fibo = n + ultimoNum;
        ultimoNum = n;
        n = fibo;
        numerosFibonacci.push(fibo);

        if(numerosFibonacci.at(-1) > numero) {
            if(numerosFibonacci.includes(numero)) {
                return `O número ${numero} ESTÁ presente na sequência de fibonacci.`;
            } else
            return `O número ${numero} NÃO ESTÁ presente na sequência de fibonacci.`;
        }
    }
}

function handle(numero) {
    if(numero === 0) {
        return 'O 0 ESTÁ presente na sequência de fibonacci.';
    }
    if(numero < 0) {
        return 'Numeros negativos não estão presentes na sequência de fibonacci';
    }

    return null;
}

function verificaNumeroFibonacci(numero){
    if(handle(numero)) {
        return handle(numero);
    }

    return fibonacci(numero);
}

console.log(verificaNumeroFibonacci(133));