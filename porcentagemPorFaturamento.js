const estados = {
    SP : 67836.43,
    RJ : 36678.66,
    MG : 29229.88,
    ES : 27165.48,
    Outros : 19849.53,
}

function porcentagem(faturamentoMesal) {
    const porcentagemEstado = Object.assign({}, estados);
    for(let i of Object.keys(estados)) {
        porcentagemEstado[i] = `${formatandoValores(estados[i])} é equivalente a ${calcPorcentagem(faturamentoMesal, estados[i])} do faturamento mensal da distribuidora.`;
    }

    return porcentagemEstado;
}

function formatandoValores(valor){
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor);
}

function calcPorcentagem(faturamentoMesal, faturamentoEstado) {
    const calc = ((faturamentoEstado*100)/faturamentoMesal).toFixed(2);
    return `${calc}%`
} 



console.log(porcentagem(100000));